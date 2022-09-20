import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const [user, setUser] = useState(props.currentUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.username) props.updateUser(user);
  };

  return (
    <form className="form">
      <div>
        <input
          className="input-box"
          type="text"
          value={user.name}
          name="name"
          onChange={handleChange}
        />
        <input
          className="input-box"
          type="text"
          value={user.username}
          name="username"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="button-primary" type="submit" onClick={handleSubmit}>
          Edit
        </button>
        <button className="button-primary" type="submit" onClick={() => props.setEditing(false)}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditUserForm;
