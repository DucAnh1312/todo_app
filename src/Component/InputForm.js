import React, { useState, Fragment } from "react";

function InputForm() {
  const [newName, setNewNames] = useState("");
  const [newDescrition, SetNewDescription] = useState("");
  const [allTodos, setTodos] = useState([]);

  
  const handleAddTodo = () => {
    let newTodoItem = {
        name: newName,
        description: newDescrition,
      };
  
      let updatedTodoArr = [...allTodos];
      updatedTodoArr.push(newTodoItem);
      setTodos(updatedTodoArr);
      localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
      setNewNames("");
      SetNewDescription("");
  }

  return (
    <div className="form">
      <div className="input-form">
        <input 
            className="box" 
            type="text" 
            placeholder="Name" 
            value={newName}
            onChange={(e) => setNewNames(e.target.value)}
        />
        <input 
            className="box" 
            type="text" 
            placeholder="Description..." 
            value={newDescrition}
            onChange={(e) => SetNewDescription(e.target.value)}
        />
      </div>
      <button 
        className="btn" 
        onClick={handleAddTodo}
        >
        + Add new item
        </button>
    </div>
  );
}

export default InputForm;

