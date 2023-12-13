import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import Nav from "../Nav";
import * as client from "./client.js";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  async function getUsers() {
    const accs = await client.findAllUsers();
    setUsers(accs);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Nav />
      <div className="mt-2 mx-3">
        <h2>Users</h2>
        <table className="table table-secondary table-striped text-center">
          <thead>
            <tr>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Profile</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>
                  <FaExternalLinkAlt
                    onClick={() => navigate(`${user._id}`)}
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
