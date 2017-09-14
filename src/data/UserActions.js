import UserActionTypes from './UserActionTypes';
import UserDispatcher from './UserDispatcher';

const Actions = {
  addUser(firstName, lastName, address) {
    UserDispatcher.dispatch({
      type: UserActionTypes.ADDED_USER,
      firstName,
      lastName,
      address
    });
  },

  deleteUser(id) {
    UserDispatcher.dispatch({
      type: UserActionTypes.DELETED_USER,
      id,
    });
  },

  updateDraft(firstName, lastName, address) {
  	UserDispatcher.dispatch({
  		type: UserActionTypes.UPDATED_USER,
      firstName,
      lastName,
      address
  	})
  }
};

export default Actions;