import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import UserStore from '../data/UserStore';

function getStores() {
  return [
    UserStore
  ];
}

function getState() {
  return {};
}

export default Container.createFunctional(AppView, getStores, getState);
