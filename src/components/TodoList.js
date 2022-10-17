import React from "react";

export const TodoList = ({ entryList, handleOnDelete, switc }) => {
  console.log("rendering", entryList);
  return (
    <div className="col-md-6">
      <h2 className="text-center">Task list</h2>
      <hr />
      <table className="table table-striped">
        <tbody id="task-list">
          {entryList.map((item, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <t>{item.task}</t>
              <td>{item.hr}</td>
              <td>
                <button
                  onClick={() => handleOnDelete(item._id)}
                  class="btn btn-danger"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
                <button
                  onClick={() => switc(item._id, "bad")}
                  class="btn btn-success"
                >
                  <i class="fa-solid fa-arrow-right-long"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row">
        <div className="col">
          The total time allocated = <span id="totalHrs"></span>
        </div>
      </div>
    </div>
  );
};
