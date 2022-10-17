import React, { useState } from "react";

export const Form = ({ taskEntry }) => {
  const [data, setData] = useState({});
  const handleOnchange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);

    setData({
      ...data,
      [name]: value,
      type: "entry",
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    console.log(data);
    taskEntry(data);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleOnSubmit}>
          <div className="row g-2 mt-3">
            <div className="col-md-6">
              <input
                name="task"
                type="text"
                className="form-control"
                placeholder="enter task title"
                s
                required
                onChange={handleOnchange}
              />
            </div>
            <div className="col-md-3">
              <input
                name="hr"
                type="number"
                className="form-control"
                placeholder="enter hours"
                min="1"
                max="168"
                required
                onChange={handleOnchange}
              />
            </div>
            <div className="col-md-3">
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  <i className="fa-solid fa-pen-to-square"></i>ADD NEW
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
