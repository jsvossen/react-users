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
            <div className='btns'>
              <button>Edit</button>
              <button>Delete</button>
            </div>
            <div className='name'>{user.firstName} {user.lastName}</div>
            <div className='addr'>{user.address}</div>
          </li>
        ))}
      </ul>
    </section>
  );
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
