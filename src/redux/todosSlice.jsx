import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    loading: false
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodos: (state, action) => {
            state.todos.push(action.payload);
            state.loading = true;
        },
        removeTodos: (state, action) => {
            state.todos = state.todos.filter(item => item.id !== action.payload.id)
        },
        checkedTodos: (state, action) => {
            const data = state.todos.find(item => item.id === action.payload.id)
            if (data) {
                data.status = 'Complete'
            }
        },
        unCheckedTodos: (state, action) => {
            const data = state.todos.find(item => item.id === action.payload.id)
            if (data) {
                data.status = 'Incomplete'
            }
        },
    },
})


export const { addTodos, removeTodos, checkedTodos, unCheckedTodos, completeFilter, inCompleteFilter } = todosSlice.actions

export default todosSlice.reducer