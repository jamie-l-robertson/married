import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { GetId } from "../utils";
import { todoListState } from "../store";
import AddItem from "./addItem";

export function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    if (inputValue === "") return false;

    setTodoList((oldTodoList) => {
      return [
        ...oldTodoList,
        {
          id: GetId(),
          text: inputValue,
          isComplete: false,
        },
      ];
    });

    setInputValue("");
  };

  const onChange = ({ target: { value } }) => setInputValue(value);

  return (
    <AddItem inputValue={inputValue} onChange={onChange} addItem={addItem} />
  );
}
