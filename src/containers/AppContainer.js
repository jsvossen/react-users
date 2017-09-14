import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import UserStore from '../data/UserStore';
import UserActions from '../data/UserActions';

function getStores() {
  return [
    UserStore
  ];
}

function getState() {
  return {
    users: UserStore.getState(),
    onAddUser: UserActions.addUser,
    onDeleteUser: UserActions.deleteUser,
    onUpdateUser: UserActions.updateUser
  };
}

export default Container.createFunctional(AppView, getStores, getState);
