import UserActions from './UserActions';

class UserService {

  loadUsers() {
    UserActions.addUser('Jane', 'Smith', '123 Main St., Anytown USA');
    UserActions.addUser('Bill', 'Denbrough', '76 Witcham St., Derry, ME');
    UserActions.addUser('Arya', 'Stark', 'Winterfell, Westros');
  }

}

export default new UserService();
