// import logo from "./logo.svg";

import "./App.css";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { addTasks, fetchTasks } from "./helpers/axioshelper";


const ttlhrperWek = 24 * 7;
function App() {
  const [tasks, setTasks] = useState([]); //replace by server db
  const [response, setResponse] = useState({})
  const [idsToDelete, setIdsToDelete] = useState([]);
  const [idsToMove, setIdsToMove] = useState([]);

  const totalHrs = tasks.reduce((acc, item) => acc + item.hr, 0);

  useEffect(() => {
    getData()
  }, [])

 

  const getData = async () => {
    const res =  await fetchTasks();
    console.log(res);
    setTasks(res.data.data);

  };


  const taskEntry = async(taskObj) => {
    if (totalHrs + taskObj.hr > ttlhrperWek) {
      // setResponse({
      //   status: "error",
      //   message: error.message,
      // })
    }
    console.log(taskObj);
    const {data} =  await addTasks(taskObj);
    console.log(data);
    if(data.success === 'success'){
      getData();
      
    }
    setResponse(data);
    // setTasks([...tasks, taskObj]);//
    // instead of adding to the array, add to the server
  };

  const handleOnDelete = (_id) => {
    if (!window.confirm("delete?")) {
      return;
    }
    const filteredArg = addTasks.filter((item) => item._id !== _id);
    addTasks(filteredArg);
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
  const handleOnSeletedMove = (_id, type) => {
   

    const updatedArg = tasks.map((item) => {
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
        <div className="row">
          <div className="col text-center mt-5">
            <h1>Not to do list</h1>
            <hr />
          </div>
        </div>

{/* alert */}
{
  response.message && (   <div className={response.status === 'success'?"alert alert-success":"alert alert-danger"}>{response.message}</div>)
}
     
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
