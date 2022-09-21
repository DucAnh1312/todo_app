import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const DoneUserTable = (props) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.doneUsers.length > 0 ? (
          props.doneUsers.map((user) => {
            const { id, name, username } = user;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>Done</td>
                <td>
                  <AiOutlineDelete
                    className="icon-delete"
                    onClick={() => props.deleteDoneUser(id)}
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

export default DoneUserTable;
