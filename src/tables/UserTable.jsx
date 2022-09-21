import React from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

const UserTable = (props) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Checked</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user, index) => {
            const { id, name, username } = user;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <th>
                  <AiOutlineCheck
                    className="icon-edit"
                    onClick={() => props.doneUser(id, index)}
                  />
                </th>
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
            <td colSpan={5}>No jobs found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
