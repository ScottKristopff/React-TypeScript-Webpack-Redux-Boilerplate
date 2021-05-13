import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
    name: 'Input Name',
    initialState: {},

    reducers: {
        /*  handleAddTodo: (state, action) => {
            state.todos.push(action.payload)
            state.text = ''
        }, */
    },
    extraReducers: {
        /*  [fetchTodos.pending]: (state) => {
            state.isLoading = true
            state.error = ''
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.todos = action.payload
            state.isLoading = false
        },
        [fetchTodos.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        }, */
    },
})

// Export different states from the initial states to be used separately
/* export const selectText = (state) => state.todos.text */

export default todosSlice
