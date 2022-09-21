import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import DoneUserTable from "./tables/DoneUserTable.jsx";
import SwitchTabBtn from "./forms/SwitchTabBtn.jsx";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import "./index.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [doneUsers, setDoneUsers] = useState([]);
  const [doneTab, setDoneTab] = useState(false);
  // add
  const addUser = (user) => {
    user.id = user.id + 1;
    setUsers([...users, user]);
  };
  // delete
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);
  // edit
  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };
  // update
  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
    setCurrentUser(initialUser);
    setEditing(false);
  };
  // done
  const doneUser = (id, index) => {
    setUsers(users.filter((user) => user.id !== id));
    let takeItem = { ...users[index] };
    let updateArray = [...doneUsers];
    updateArray.push(takeItem);
    setDoneUsers(updateArray);
  };
  // delete done
  const deleteDoneUser = (id) => {
    setDoneUsers(doneUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <div className="tilte">
        <p>Todo App</p>
      </div>
      <div>
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
          <SwitchTabBtn doneTab={doneTab} setDoneTab={setDoneTab} />
        </div>
        <div className="seven columns">
          {doneTab === false && (
            <UserTable
              users={users}
              deleteUser={deleteUser}
              editUser={editUser}
              doneUser={doneUser}
            />
          )}
          {doneTab === true && (
            <DoneUserTable
              doneUsers={doneUsers}
              deleteDoneUser={deleteDoneUser}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
