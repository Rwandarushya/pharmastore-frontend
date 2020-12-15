import React from "react";


import RegisterModal from './RegisterModal';
import UserList from './UserList'

function UserComponent() {
  return (
    <div>
      <h3>List of all Pharmastore users</h3>
      <RegisterModal/>
      <UserList/>
    </div>
  );
}

export default UserComponent;
