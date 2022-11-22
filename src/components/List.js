import React from "react";
import { NotTodoList } from "./NotTodoList";
import { TodoList } from "./TodoList";

export const List = ({ tasks,
  
  handleOnSeleteAll,
   switc,idsToDelete, handleOnCheck }) => {
  const entryList = tasks.filter((item) => item.type === "entry");
  const badList = tasks.filter((item) => item.type === "bad");

  console.log(tasks);
  return (
    <div className="row mt-5">
      <TodoList
        entryList={entryList}
        idsToDelete={idsToDelete}
        handleOnSeleteAll = {handleOnSeleteAll}
      
        switc={switc}
        handleOnCheck={handleOnCheck}
      />
      <NotTodoList
        badList={badList}
        idsToDelete={idsToDelete}
        handleOnSeleteAll = {handleOnSeleteAll}
      
        switc={switc}
        handleOnCheck={handleOnCheck}
      />
    </div>
  );
};
