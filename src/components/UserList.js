import React, { Fragment, useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  //Delete product
  const deleteUser = async (id) => {
    try {
      const deleteProduct = await fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      });
      console.log(deleteProduct);

      setUsers(users.filter((pro) => pro.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };
 console.log(`the token is ${localStorage.getItem('token')}`);
  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/users", {
        headers: { Authorization: localStorage.getItem('token')},
      });
      const jsonData = await response.json();

      setUsers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
console.log(users)
  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Names</th>
            <th>Email</th>
            <th>Pharmacy</th>
            <th>Phone </th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((usr) => (
            <tr key={usr.id}>
              <td>{usr.names}</td>
              <td>{usr.email}</td>
              <td>{usr.pharmacyName}</td>
              <td>{usr.PhoneNumber}</td>
              <td>{usr.role}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(usr.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default UserList;
