// import logo from "./logo.svg";

import "./App.css";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([]);
  const taskEntry = (taskObj) => {
    taskObj.__id = uuidv4();
    console.log(taskObj);
    setTasks([...tasks, taskObj]);
  };

  const handleOnDelete = (_id) => {
    if (!window.confirm("delete?")) {
      return;
    }

    const filteredArg = tasks.filter((item) => item._id !== _id);
    setTasks(filteredArg);
  };

  const switc = (_id, type) => {
    alert(_id);

    const updatedArg = tasks.map((item, index) => {
      if (_id === item._id) {
        item.type = type;
      }
      return item;
    });
    setTasks(updatedArg);
  };

  return (
    <div className="wrapper">
      <div className="container">
        {/* <!-- top title -->  */}
        <div className="row">
          <div className="col text-center mt-5">
            <h1>Not to do list</h1>
            <hr />
          </div>
        </div>
        {/* <!-- form area -->  */}
        <Form taskEntry={taskEntry} />
        {/* <!-- list area --> */}
        <List tasks={tasks} handleOnDelete={handleOnDelete} switc={switc} />
      </div>
    </div>
  );
}

export default App;
