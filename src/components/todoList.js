import React from "react";
import { useRecoilValue } from "recoil";
import { TodoItemCreator } from "./todoItemCreator";
import { filteredTodoListState } from "../store";
import Header from "./header";
import TodoItem from "./todoItem.js";
import CONSTANTS from "../config/constants";
import { RandomMessage } from "../utils";



function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  const noTasks = RandomMessage(CONSTANTS.NOTASKS)

  return (
    <div className="panel">
      <Header />
      {todoList.length > 0 ? (
        todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))
      ) : (
        <p className="no-items">
          No tasks, time for a {noTasks}.
        </p>
      )}
      <TodoItemCreator />
    </div>
  );
}

export { TodoList };
