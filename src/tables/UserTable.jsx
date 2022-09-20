import React, { useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import "../toggle.css";

const UserTable = (props) => {
  const { complete, setComplete } = props;
  const { completeUsers, setCompleteUsers } = props;
  const { users, SetUsers } = props;
  //   console.log(completeUsers);
  const hanldeComplete = (prev) => {
    let filteredItem = { ...users[(prev = prev - 1)] };
    // console.log(filteredItem)
    let updateCompleteArr = [...completeUsers];
    updateCompleteArr.push(filteredItem);
    console.log(updateCompleteArr);
    setCompleteUsers(updateCompleteArr);
  };

  const deleteCompleteUser = (props) => {
    setCompleteUsers(completeUsers.filter((id) => props.id !==id))
  }
  return (
    <>
      {complete === false && (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Checked</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.users.length > 0 ? (
              props.users.map((user) => {
                const { id, name, username } = user;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{username}</td>
                    <td>
                      <label class="switch">
                        <input
                          type="checkbox"
                          onClick={() => hanldeComplete(id)}
                        />
                        <span class="slider round"></span>
                      </label>
                    </td>
                    <td>
                      <MdOutlineModeEditOutline
                        className="icon-edit"
                        onClick={() => props.editUser(id, user)}
                      />
                      <AiOutlineDelete
                        className="icon-delete"
                        onClick={() => props.deleteUser(id)}
                      />
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4}>No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
      {complete === true && (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Checked</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.users.length > 0 ? (
              completeUsers.map((completeUsers) => {
                const { id, name, username } = completeUsers;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{username}</td>
                    <td>Done</td>
                    <td>
                      <AiOutlineDelete
                        className="icon-delete"
                        onClick={() => deleteCompleteUser(id)}
                      />
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4}>No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UserTable;
