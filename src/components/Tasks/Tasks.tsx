import React from 'react'
import { useState } from 'react'
import { ITask } from '../../interfaces/ITask'
import Task from '../Task/Task.module'
import Input from '../Input/Input.module'
import { store } from '../../store/store'

const Tasks = () => {
    
    const [tasks, setTasks] = useState<ITask[]>(store.getState().tasks.tasks)
    store.subscribe(() => {
        setTasks(store.getState().tasks.tasks)
    })
    return (
        <div>
            <Input />
            {tasks.map((todo) => (
                <Task {...todo} key={todo._id} />
            ))}
        </div>
    )
}
export default Tasks
