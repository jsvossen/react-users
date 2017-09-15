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

  startEditingUser(id) {
    UserDispatcher.dispatch({
      type: UserActionTypes.STARTED_USER_EDIT,
      id,
    });
  },

  stopEditingUser(id) {
    UserDispatcher.dispatch({
      type: UserActionTypes.STOPPED_USER_EDIT,
      id,
    });
  },

  updateUser(firstName, lastName, address) {
  	UserDispatcher.dispatch({
  		type: UserActionTypes.UPDATED_USER,
      firstName,
      lastName,
      address
  	})
  }
};

export default Actions;
