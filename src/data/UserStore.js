import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import UserActionTypes from './UserActionTypes';
import UserDispatcher from './UserDispatcher';

import Counter from './Counter';
import User from './User';

class UserStore extends ReduceStore {
  constructor() {
    super(UserDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    const actions = {
      [UserActionTypes.ADDED_USER]: this.addUser,
      // [UserActionTypes.DELETED_USER]: () = {},
      // [UserActionTypes.UPDATED_USER]: () = {}
    }
    return actions[action.type] ? actions[action.type](state, action) : state;
  }

  addUser(state, action) {
    action.firstName = action.firstName.trim();
    action.lastName = action.lastName.trim();
    action.address = action.address.trim();
    if (!action.firstName && !action.lastName && !action.address) {
      return state;
    }
    const id = Counter.increment();
    return state.set(id, new User({
      id,
      firstName: action.firstName,
      lastName: action.lastName,
      address: action.address
    }));
  }
}

export default new UserStore();
