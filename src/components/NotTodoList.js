import React from "react";

export const NotTodoList = ({ badList }) => {
  return (
    <div className="col-md-6 ">
      <h2 className="text-center">bad list</h2>
      <hr />
      <table className="table table-striped">
        <tbody id="bad-list">
          {badList.map((item, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{item.task}</td>
              <td>{item.hr}hr</td>
              <td>
                <button
                  // onClick={() => switc(i, "entry")}
                  class="btn btn-success"
                >
                  <i class="fa-solid fa-arrow-left-long"></i>l
                </button>
                <button
                  // onClick={() => handleOnDelete(i)}
                  class="btn btn-danger"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row">
        <div className="col">
          the total timme allocated = <span id="totalHrs"></span>
        </div>
      </div>
    </div>
  );
};
