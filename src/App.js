import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import InputForm from "./Component/InputForm";
import TaskTable from "./Component/TaskTable";



function TodoApp() {
  return (
    <Fragment>
      <div className="App">
        <div className="header">
          <p>Todo app</p>
        </div>
      <InputForm />
      <TaskTable />
      </div>
    </Fragment>
  );
}

export default TodoApp;
