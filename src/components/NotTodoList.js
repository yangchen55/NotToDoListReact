import React from "react";

export const NotTodoList = () => {
  return (
    <div class="col-md-6 ">
      <h2 class="text-center">bad list</h2>
      <hr />
      <table class="table table-striped">
        <tbody id="bad-list">{/* <!-- fjsdlkfjkl --> */}</tbody>
      </table>
      <div class="row">
        <div class="col">
          the total timme allocated = <span id="totalHrs"></span>
        </div>
      </div>
    </div>
  );
};
