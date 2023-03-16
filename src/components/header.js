import React from "react";
import TodoListFilters from "./todoListFilter";
import { GetDateInfo } from "../utils";

const Header = () => {
  const currentDate = GetDateInfo();

  return (
    <header className="header">
      <h1 className="visually-hidden">Married - A Todolist app</h1>
      <div className="date">
        <span className="day">{currentDate.day}</span>
        <span className="month">{currentDate.month}</span>
        <span className="year">{currentDate.year}</span>
      </div>
      <TodoListFilters />
    </header>
  );
};

export default Header;
