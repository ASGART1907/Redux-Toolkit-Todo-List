import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos:[]
}

export const todosSlice = createSlice({
    name:"Todos",
    initialState,
    reducers:{
        addTodo: (state,action) => {
            state.todos.push(action.payload);
        },
        removeTodo:(stata,action) => {
            const filtered = stata.todos.filter(todo => todo.id !== action.payload);
            stata.todos = filtered;
        }
    }
})

export const { addTodo,removeTodo } = todosSlice.actions;
export default todosSlice.reducer;