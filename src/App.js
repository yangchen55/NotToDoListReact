// import logo from "./logo.svg";

import "./App.css";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ttlhrperWek = 24 * 7;
function App() {
  const [tasks, setTasks] = useState([]);
  const [idsToDelete, setIdsToDelete] = useState([]);
  const [idsToMove, setIdsToMove] = useState([]);

  const totalHrs = tasks.reduce((acc, item) => acc + item.hr, 0);
  const taskEntry = (taskObj) => {
    if (totalHrs + taskObj.hr > ttlhrperWek) {
      return alert("time limit exceeded");
    }
    // console.log(taskObj);
    setTasks([...tasks, taskObj]);
  };

  const handleOnDelete = (_id) => {
    if (!window.confirm("delete?")) {
      return;
    }
    const filteredArg = tasks.filter((item) => item._id !== _id);
    setTasks(filteredArg);
  };

  const handleOnSeletedDelete = () => {
    if (!window.confirm("delete?")) {
      return;
    }
    const filteredArg = tasks.filter((item) => !idsToDelete.includes(item._id));
    setTasks(filteredArg);
    setIdsToDelete([]);
    console.log(idsToDelete);
  };
  const handleOnSeletedMove = () => {
    alert(_id);

    const updatedArg = tasks.map((item, index) => {
      if (_id === item._id) {
        item.type = type;
      }
      return item;
    });
    setTasks(updatedArg);
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

  const handleOnCheck = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setIdsToDelete([...idsToDelete, value]);
    } else {
      const tempArg = idsToDelete.filter((item) => item !== value);
      setIdsToDelete(tempArg);
    }
    console.log(e.target.checked);
  };
  console.log(idsToDelete);
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
        <List
          tasks={tasks}
          handleOnDelete={handleOnDelete}
          switc={switc}
          handleOnCheck={handleOnCheck}
        />
        {/* how to know its true and its truthy value */}
        {idsToDelete.length > 0 && (
          <div className="d-grid py-4">
            <button
              onClick={handleOnSeletedDelete}
              className="btn btn-lg btn-danger"
            >
              delete selected tasks
            </button>

            <button
              onClick={handleOnSeletedMove}
              className="btn btn-lg btn-primary"
            >
              move selected tasks
            </button>
          </div>
        )}

        <div className="row fw-bold">
          <div className="col">The total time allocated = {totalHrs} hrss</div>
        </div>
      </div>
    </div>
  );
}

export default App;
