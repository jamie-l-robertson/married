import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../store";
import { ReplaceItemAtIndex, RemoveItemAtIndex } from "../utils";
import { ReactComponent as RemoveIcon } from "../icons/circle-minus.svg";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem.id === item.id);

  const editItemText = ({ target: { value } }) => {
    const newList = ReplaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = ReplaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = RemoveItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div className="todo-item">
      <input
        type="text"
        value={item.text}
        style={{ textDecoration: item.isComplete && "line-through" }}
        onChange={editItemText}
        aria-label="click to edit task"
      />
      <div className="controls">
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={toggleItemCompletion}
        />
        <button onClick={deleteItem} aria-label="Remove item">
          <RemoveIcon />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
