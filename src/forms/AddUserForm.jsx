import React, { useState } from "react";

const AddUserForm = (props) => {
  const initUser = { id: null, name: "", username: "" };

  const [user, setUser] = useState(initUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.username) {
      handleChange(e, props.addUser(user));
    }
  };

  return (
    <form className="form">
      <div>
        <input
          placeholder="name"
          className="input-box"
          type="text"
          value={user.name}
          name="name"
          onChange={handleChange}
        />
        <input
          placeholder="Description..."
          className="input-box"
          type="text"
          value={user.username}
          name="username"
          onChange={handleChange}
        />
      </div>
      <button className="button-primary" type="submit" onClick={handleSubmit}>
        Add New Item
      </button>
    </form>
  );
};

export default AddUserForm;
