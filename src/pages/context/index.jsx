import React from 'react';
import UserContext from './UserContext';
import Profile from './profile';

function App() {
  const user = { name: 'kartik' };

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>Welcome to the App</h1>
        <Profile />
      </div>
    </UserContext.Provider>
  );
}

export default App;
