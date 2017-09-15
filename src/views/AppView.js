import React from 'react';
import classnames from 'classnames';

function AppView(props) {
  return (
    <div id='app'>
      <h1>All Users <span className='count'>({props.users.size})</span></h1>
    	<Main {...props} />
      <hr />
      <AddUser {...props} />
    </div>
  );
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: null
    }
  }

  render() {
    const props = this.props;
    if (props.users.size === 0) {
      return null;
    }
    return (
      <section id="main">
        <ul id="user-list">
          {[...props.users.values()].map(user => (
            <li id={'user-'+user.id} key={user.id}>
              <UserItem user={user} {...props}/>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

class UserItem extends React.Component {
  constructor(props) {
    super(props);
    this.resetState();
  }
  resetState() {
    this.state = {
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      address: this.props.user.address
    }
  }

  render() {
    let isEditing = this.props.editing === this.props.user.id;
    let userView = (
      <div>
        <div className='name'>{this.props.user.firstName} {this.props.user.lastName}</div>
        <div className='addr'>{this.props.user.address}</div>
      </div>
    );
    if (isEditing) userView = <p>Editing!</p>;

    return(
      <div className={classnames({
        'user-item': 'user-item',
        editing: isEditing,
      })}>
        <div className='btns'>
          <button onClick={() => this.props.onStartEdit(this.props.user.id) }>Edit</button>
          <button onClick={() => this.props.onStopEdit(this.props.user.id)}>Cancel</button>
          <button onClick={() => this.props.onDeleteUser(this.props.user.id)}>Delete</button>
        </div>
        {userView}
      </div>
    );
  }
}

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.clearState();
  }
  clearState() {
    this.state = {
      firstName: '',
      lastName: '',
      address: ''
    };
  }
  render() {
    const onClick = (event) => {
      this.props.onAddUser(this.state.firstName, this.state.lastName, this.state.address);
      this.clearState();
      event.preventDefault();
    };
    const onChange = (event) => {
      let value = event.target.value;
      let field = event.target.name;
      this.setState({ [field]: value } );
    };
    return (
      <form id='add-user'>
        <h2>Add User</h2>
        <input type='text' name='firstName' className='half' placeholder='First Name'
          value={this.state.firstName}
          onChange={onChange}/>
        <input type='text' name='lastName' className='half' placeholder='Last Name'
          value={this.state.lastName}
          onChange={onChange}/>
        <input type='text' name='address' placeholder='Address'
          value={this.state.address}
          onChange={onChange}/>
        <button type='submit' onClick={onClick}>Save</button>
      </form>
    );
  }
}

export default AppView;
