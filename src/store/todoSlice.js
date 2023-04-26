import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice ({
    name: 'todo',
    initialState: {
        todo: []
    },
    reducers: {
        saveTodo (state,action) {
            console.log(state);
            console.log(action)
            state.todo.push({
                id: uuidv4(),
                title: action.payload.value,
                status: false,
            })
        },
        deleteTodoDone (state,action) {},
        deleteTodo (state,action) {},
        deleteTodoAll (state,action) {},
        editTodo (state,action) {},
        statusTodo (state,action) {},
    },
});
export const {saveTodo, deleteTodoDone, deleteTodoAll, editTodo, statusTodo} = todoSlice.actions;
export default todoSlice.reducer;