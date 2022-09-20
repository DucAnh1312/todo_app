import React, { useState } from "react";
import userList from "./data.js";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

const App = () => {
  const [users, setUsers] = useState(userList);
  const [complete, setComplete] = useState(false);
  const [completeUsers, setCompleteUsers] = useState([]);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
    setCurrentUser(initialUser);
    setEditing(false);
  };

  return (
    <div className="container">
      <div className="title">
        <p>Todo App</p>
      </div>
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <EditUserForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>

        <div className="change-screen">
          <button
            className={`second-btn ${complete === false && "active"}`}
            onClick={() => setComplete(false)}
          >
            Todo
          </button>
          <button
            className={`second-btn ${complete === true && "active"}`}
            onClick={() => setComplete(true)}
          >
            Done
          </button>
        </div>

        <div>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
            complete={complete}
            completeUsers={completeUsers}
            setCompleteUsers={setCompleteUsers}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
