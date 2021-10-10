import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const completedTodoSlice = createSlice({
    name: 'completedTodos',
    initialState: [] as string[],
    reducers: {
        addCompletedTodo: (state, action : PayloadAction<string>) => [...state, action.payload],
        removeCompletedTodo: (state, action: PayloadAction<string>) => state.filter(todo => todo !== action.payload)
    }
})

export const { addCompletedTodo, removeCompletedTodo } = completedTodoSlice.actions;

export default completedTodoSlice.reducer;