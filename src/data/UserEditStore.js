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
    return null;
  }

  reduce(state, action) {
    const actions = {
      [UserActionTypes.STARTED_USER_EDIT]: this.startEdit,
      [UserActionTypes.STOPPED_USER_EDIT]: this.stopEdit,
    }
    return actions[action.type] ? actions[action.type](state, action) : state;
  }

  startEdit(state, action) {
    return action.id;
  }

  stopEdit(state, action) {
    return null;
  }
}

export default new UserStore();
