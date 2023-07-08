import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITask } from '../../interfaces/ITask'
const initialState: { tasks: ITask[] } = {
    tasks: [
        {
            _id: '5f5f67d8a5b9a3b3c8c3c3c5',
            text: 'Form slice',
            isCompleted: false,
        },
        {
            _id: '5f5f67d8a5b9a3b3c8c3c3c7',
            text: 'from slice',
            isCompleted: true,
        },
    ],
}
export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        createTodo: (state, action: PayloadAction<string>) => {
            const todo = {
                _id: new Date().toString(),
                text: action.payload,
                isCompleted: false,
            }
            state.tasks.unshift(todo)
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(
                (item) => item._id !== action.payload
            )
        },
        changeTodoState: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.map((item) => {
                item._id === action.payload
                    ? (item.isCompleted = !item.isCompleted)
                    : item
                return item
            })
        },
        changeTodoText: (
            state,
            action: PayloadAction<{
                _id: string
                value: string
            }>
        ) => {
            state.tasks.map((task) => {
                if (task._id === action.payload._id) {
                    task.text = action.payload.value
                }
                return task
            })
        },
    },
})
