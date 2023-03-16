import React from "react";
import { ReactComponent as AddIcon } from "../icons/circle-plus.svg";

const AddItem = ({ inputValue, onChange, addItem }) => {
  return (
    <div className="add-item">
      <input
        type="text"
        placeholder="Add an item"
        value={inputValue}
        onChange={onChange}
        aria-label="Enter task detail here"
      />
      <button onClick={addItem} aria-label="Add the task">
        <AddIcon />
      </button>
    </div>
  );
};

export default AddItem;
