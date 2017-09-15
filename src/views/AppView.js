import React from 'react';

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

function Main(props) {
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

function UserItem(props) {
    let isEditing = props.editing === props.user.id;
    let userView = (
      <div>
        <div className='name'>{props.user.firstName} {props.user.lastName}</div>
        <div className='addr'>{props.user.address}</div>
      </div>
    );
    let buttons = (
      <div className='btns'>
        <button onClick={() => props.onStartEdit(props.user.id) }>Edit</button>
        <button onClick={() => props.onDeleteUser(props.user.id)}>Delete</button>
      </div>
    );
    if (isEditing) {
      userView = (
        <div className='edit-user'>
          <UserForm {...props} />
        </div>
      );
      buttons = null;
    }

    return(
      <div className='user-item'>
        {buttons}
        {userView}
      </div>
    );
}

function AddUser(props) {
  return (
    <div id='add-user'>
      <h2>Add User</h2>
      <UserForm {...props} />
    </div>
  );
}

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.clearState(props.user);
  }
  clearState(user) {
    user = user || {}
    this.state = {
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      address: user.address || ''
    };
  }
  render() {
    const user = this.props.user;
    const onSave = (event) => {
      if (user) {
        this.props.onUpdateUser(user.id, this.state.firstName, this.state.lastName, this.state.address);
        this.props.onStopEdit(user.id);
      } else {
        this.props.onAddUser(this.state.firstName, this.state.lastName, this.state.address);
      }
      this.clearState(user);
      event.preventDefault();
    };

    const onCancel = (event) => {
      if (user) this.props.onStopEdit(user.id);
      this.clearState(user);
      event.preventDefault();
    };

    const onChange = (event) => {
      let value = event.target.value;
      let field = event.target.name;
      this.setState({ [field]: value } );
    };
    return (
      <form className='user-form'>
        <input type='text' name='firstName' className='half' placeholder='First Name'
          value={this.state.firstName}
          onChange={onChange}/>
        <input type='text' name='lastName' className='half' placeholder='Last Name'
          value={this.state.lastName}
          onChange={onChange}/>
        <input type='text' name='address' placeholder='Address'
          value={this.state.address}
          onChange={onChange}/>
        <button onClick={onSave} className='submit' type='submit'>Save</button>
        <button onClick={onCancel} className='cancel' type='button'>Cancel</button>
      </form>
    );
  }
}

export default AppView;
