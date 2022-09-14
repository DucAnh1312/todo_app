import React, { useState, Fragment } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import "../Toggle.css";

function TaskTable() {
  const [compelete, setComplete] = useState(false);
  return (
    <Fragment>
      <div className="change-screen">
        <button
          className={`second-btn ${compelete === false && "active"}`}
          onClick={() => setComplete(false)}
        >
          Todo
        </button>
        <button
          className={`second-btn ${compelete === true && "active"}`}
          onClick={() => setComplete(true)}
        >
          Done
        </button>
      </div>

      <table className="list-task">
        <tr className="header-list">
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Deadline</th>
          <th>Checked</th>
          <th>Action</th>
        </tr>

        <tr className="header-list">
          <th>ID</th>
          <th>Bui Trung Duc Anh</th>
          <th>Create Todo App</th>
          <th>10 PM</th>
          <th>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </th>
          <th>
            <MdOutlineModeEditOutline className="icon-edit" />
            <AiOutlineDelete className="icon-delete" />
          </th>
        </tr>
      </table>
    </Fragment>
  );
}

export default TaskTable;
