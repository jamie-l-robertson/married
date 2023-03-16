import React from "react";
import { useRecoilValue } from "recoil";
import { TodoItemCreator } from "./todoItemCreator";
import { filteredTodoListState } from "../store";
import Header from "./header";
import TodoItem from "./todoItem.js";
import { ReactComponent as CoffeeIcon } from "../icons/coffee-cup.svg";

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div className="panel">
      <Header />
      {todoList.length > 0 ? (
        todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))
      ) : (
        <p className="no-items">
          No tasks, time for a hot beverage <CoffeeIcon />
        </p>
      )}
      <TodoItemCreator />
    </div>
  );
}

export { TodoList };
