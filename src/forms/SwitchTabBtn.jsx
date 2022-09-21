import React from "react";

const SwitchTabBtn = (props) => {
  return (
    <div className="change-screen">
      <button
        className={`button-secondary ${props.doneTab === false && "active"}`}
        onClick={() => props.setDoneTab(false)}
      >
        Todo
      </button>
      <button
        className={`button-secondary ${props.doneTab === true && "active"}`}
        onClick={() => props.setDoneTab(true)}
      >
        Done
      </button>
    </div>
  );
};

export default SwitchTabBtn;
