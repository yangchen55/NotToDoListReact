import React from "react";

export const NotTodoList = ({
  badList,
  handleOnDelete,
  switc,
  handleOnCheck,
}) => {
  const ttlHr = badList.reduce((acc, item) => acc + item.hr, 0);
  return (
    <div className="col-md-6 ">
      <h2 className="text-center">bad list</h2>
      <hr />
      <table className="table table-striped">
        <tbody id="bad-list">
          {badList.map((item, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>
                <input
                  type="checkbox"
                  className="form-check-input"
                  value={item._id}
                  onChange={handleOnCheck}
                ></input>
              </td>

              <td>{item.task}</td>
              <td>{item.hr}hr</td>
              <td>
                <button
                  onClick={() => switc(item._id, "entry")}
                  class="btn btn-success"
                >
                  <i class="fa-solid fa-arrow-left-long"></i>l
                </button>{" "}
                <button
                  onClick={() => handleOnDelete(item._id)}
                  class="btn btn-danger"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row fw-bold">
        <div className="col">you could have saved = {ttlHr} hrs</div>
      </div>
    </div>
  );
};
