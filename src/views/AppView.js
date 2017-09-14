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

function AddUser(props) {
  return (
    <div id='add-user'>
      <h2>Add User</h2>
      <input type='text' className='half' placeholder='First Name'/>
      <input type='text' className='half' placeholder='Last Name'/>
      <input type='text' placeholder='Address'/>
      <button>Save</button>
    </div>
  );
}

export default AppView;
