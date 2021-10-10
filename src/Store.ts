import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/addTodo/addTodoSlice";
import completedTodoReducer from './features/completedTodo/completedTodoSlice';
export const store = configureStore({
    reducer: {
        todos: todoReducer,
        completedTodos: completedTodoReducer,
    }
});
