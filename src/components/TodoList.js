import React from "react";

export const TodoList = ({
  entryList,
  idsToDelete,
  handleOnDelete,
  switc,
  handleOnSeleteAll,
  handleOnCheck,
}) => {
  console.log("rendering", entryList);


  return (
    <div className="col-md-6">
      <h2 className="text-center">Task list</h2>

      <hr />
      {entryList.length > 1 && (
      <div>
      <input
                  type="checkbox"
                  className="form-check-input"
                  value="entry"
                  // onChange={handleOnCheck}
              onChange={handleOnSeleteAll}
                ></input>
      </div>
      )}
      <table className="table table-striped">
        <tbody id="task-list">
          {entryList.map((item, i) => (
            <tr key={item._id}>
              <th scope="row">{i + 1}</th>
              <td>
                <input
                  type="checkbox"
                  className="form-check-input"
                  value={item._id}
                  onChange={handleOnCheck}
                  checked ={idsToDelete.includes(item._id)}
                ></input>
              </td>
              <td>{item.task}</td>
              <td>{item.hr}</td>
              <td>
                
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
    </div>
  );
};
