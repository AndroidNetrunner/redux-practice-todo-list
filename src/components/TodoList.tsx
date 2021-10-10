import { RootStateOrAny, useSelector } from "react-redux";
import { TodoItem } from "./ToDoItem";

const selectTodos = (state: RootStateOrAny) => state.todos;

export const TodoList = () => {
    const todos = useSelector(selectTodos);
    return (
    <div className="row mx-1 px-5 pb-3 w-80">
        <div className="col mx-auto">
            {todos.map((todo : string) => <TodoItem key={todo} todo={todo} />)}
        </div>
    </div>
)}