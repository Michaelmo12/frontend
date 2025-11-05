import React from 'react';

function OnlineUsers() {
  const users = [
    { username: 'john_doe', isOnline: true },
    { username: 'sarah_smith', isOnline: false },
    { username: 'mike_jones', isOnline: true },
    { username: 'emily_clark', isOnline: false },
    { username: 'david_brown', isOnline: true },
    { username: 'jessica_wilson', isOnline: false }
  ];

  return (
    <div className="online-users">
      <h2>Online Users</h2>
      <ul>
        {users
          .filter(user => user.isOnline === true)
          .map((user, index) => (
            <li key={index}>
              {user.username} - Online
            </li>
          ))}
      </ul>
    </div>
  );
}

export default OnlineUsers;
