import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITask } from '../../interfaces/ITask'
const initialState: ITask[] = []
export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        createTodo: (state, action: PayloadAction<ITask>) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action:PayloadAction<string>) => {
            state = state.filter((todo) => todo._id !== action.payload)
        },
    },
})
