import React from "react";
import { NotTodoList } from "./NotTodoList";
import { TodoList } from "./TodoList";

export const List = ({ tasks, handleOnDelete, switc, handleOnCheck }) => {
  const entryList = tasks.filter((item) => item.type === "entry");
  const badList = tasks.filter((item) => item.type === "bad");

  console.log(tasks);
  return (
    <div className="row mt-5">
      <TodoList
        entryList={entryList}
        handleOnDelete={handleOnDelete}
        switc={switc}
        handleOnCheck={handleOnCheck}
      />
      <NotTodoList
        badList={badList}
        handleOnDelete={handleOnDelete}
        switc={switc}
        handleOnCheck={handleOnCheck}
      />
    </div>
  );
};
