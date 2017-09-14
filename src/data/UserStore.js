import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import UserDispatcher from './UserDispatcher';

import User from './User';

class UserStore extends ReduceStore {
  constructor() {
    super(UserDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      default:
        return state;
    }
  }
}

export default new UserStore();
