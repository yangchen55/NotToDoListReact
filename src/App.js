// import logo from "./logo.svg";
import "./App.css";
import { NotTodoList } from "./components/NotTodoList";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div class="wrapper">
      <div class="container">
        {/* <!-- top title -->  */}
        <div class="row">
          <div class="col text-center mt-5">
            <h1>Not to do list</h1>
            <hr />
          </div>
        </div>

        {/* <!-- form area -->  */}

        <TodoInput />

        {/* <!-- list area --> */}
        <div class="row mt-5">
          {/* <!-- Todo tasklist |left col --> */}
          <TodoList />

          {/* <!-- not to do || right col --> */}

          <NotTodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
