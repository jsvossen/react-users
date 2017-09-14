import React from 'react';

function AppView(props) {
  return (
  	<Main {...props} />
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
            <div className='name'>{user.firstName} {user.lastName}</div>
            <div className='addr'>{user.address}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AppView;
