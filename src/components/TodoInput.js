import React from "react";

export const TodoInput = () => {
  return (
    <div>
      <div>
        <form action="javascript:void(0)" onsubmit="handleOnSubmit(this)">
          <div class="row g-2 mt-3">
            <div class="col-md-6">
              <input
                name="task"
                type="text"
                class="form-control"
                placeholder="enter task title"
                s
                required
              />
            </div>
            <div class="col-md-3">
              <input
                name="hr"
                type="number"
                class="form-control"
                placeholder="enter hours"
                min="1"
                max="168"
                required
              />
            </div>
            <div class="col-md-3">
              <div class="d-grid gap-2">
                <button class="btn btn-primary">
                  <i class="fa-solid fa-pen-to-square"></i>ADD NEW
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
