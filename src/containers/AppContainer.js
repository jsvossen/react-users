import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import UserStore from '../data/UserStore';
import UserEditStore from '../data/UserEditStore';
import UserActions from '../data/UserActions';

function getStores() {
  return [
    UserStore,
    UserEditStore
  ];
}

function getState() {
  return {
    users: UserStore.getState(),
    editing: UserEditStore.getState(),
    onAddUser: UserActions.addUser,
    onDeleteUser: UserActions.deleteUser,
    onStartEdit: UserActions.startEditingUser,
    onStopEdit: UserActions.stopEditingUser,
    onUpdateUser: UserActions.updateUser
  };
}

export default Container.createFunctional(AppView, getStores, getState);
