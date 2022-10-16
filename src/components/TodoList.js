import React from "react";

export const TodoList = () => {
  return (
    <div class="col-md-6">
      <h2 class="text-center">Task list</h2>
      <hr />
      <table class="table table-striped">
        <tbody id="task-list"></tbody>
      </table>
      <div class="row">
        <div class="col">
          the total timme allocated = <span id="totalHrs"></span>
        </div>
      </div>
    </div>
  );
};
