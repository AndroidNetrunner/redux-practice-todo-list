import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import { addCompletedTodo, removeCompletedTodo } from "../features/completedTodo/completedTodoSlice"

export const TodoItem = ({ todo }: { todo: string }) => {
    const selectCompletedToDo = (store : RootStateOrAny) => store.completedTodos;
    const completedTodo = useSelector(selectCompletedToDo);
    const dispatch = useDispatch();
    return (
        <div className="row px-3 align-items-center todo-item rounded">
            <div className="col-auto m-1 p-0 d-flex align-items-center">
            </div>
            <div className="col px-1 m-1 d-flex align-items-center">
                <input type="text" className={`form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3 ${completedTodo.includes(todo) ? "completedTodo" : "" }`} readOnly value={todo} title={todo} />
                <input type="text" className="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none" value={todo} />
            </div>
            <div className="col-auto m-1 p-0 px-3 d-none">
            </div>
            <div className="col-auto m-1 p-0 todo-actions">
                <div className="row d-flex align-items-center justify-content-end">
                    <h5 className="m-0 p-0 px-2">
                        <button type="button" onClick={() => dispatch(addCompletedTodo(todo))} className="btn btn-primary">Complete</button>
                    </h5>
                    <h5 className="m-0 p-0 px-2">
                        <button type="button" onClick={() => dispatch(removeCompletedTodo(todo))} className="btn btn-danger">Remove</button>
                    </h5>
                </div>
                <div className="row todo-created-info">
                    <div className="col-auto d-flex align-items-center pr-2">
                        <label className="date-label my-2 text-black-50">28th Jun 2020</label>
                    </div>
                </div>
            </div>
        </div>
    )
}