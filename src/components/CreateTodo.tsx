import { useDispatch } from "react-redux";
import { addTodo } from "../features/addTodo/addTodoSlice";

export const CreateTodo = () => {
    const dispatch = useDispatch();
    function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let value = document.querySelector("input.newTodo") as HTMLInputElement;
        dispatch(addTodo(value.value));
        value.value = "";
    }
    return (
    <>
    <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
            <form onSubmit={(event) => handleSubmit(event)}>
            <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                <div className="col">
                    <input className="newTodo form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text" placeholder="Add new .." />
                </div>
                <div className="col-auto m-0 px-2 d-flex align-items-center">
                    <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">Due date not set</label>
                    <i className="fa fa-calendar my-2 px-1 text-primary btn due-date-button" data-toggle="tooltip" data-placement="bottom" title="Set a Due date"></i>
                    <i className="fa fa-calendar-times-o my-2 px-1 text-danger btn clear-due-date-button d-none" data-toggle="tooltip" data-placement="bottom" title="Clear Due date"></i>
                </div>
                <div className="col-auto px-0 mx-0 mr-2">
                    <button type="button" className="btn btn-primary">Add</button>
                </div>
            </div>
            </form>
        </div>
    </div>
    <div className="p-2 mx-4 border-black-25 border-bottom"></div>
    </>
)};
