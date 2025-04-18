import React, { useContext } from 'react';
import UserContext from './UserContext';

function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Name: {user.name}</p>
    </div>
  );
}

export default Profile;
