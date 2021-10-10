import { CreateTodo } from "./CreateTodo";
import { Options } from "./Options";
import { TodoList } from "./TodoList";
import { TodoTitle } from "./TodoTitle";

export const Todos = () => (
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
        <TodoTitle />
        {/*<!-- Create todo section -->*/}
        <CreateTodo />
        {/* <!-- View options section --> */}
        <Options />
        {/* <!-- Todo list section --> */}
        <TodoList />
    </div>
);