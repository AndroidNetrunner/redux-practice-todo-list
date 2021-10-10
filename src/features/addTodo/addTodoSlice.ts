import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: ['learn Typescript'] as string[],
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => [...state, action.payload],
    }
})

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;