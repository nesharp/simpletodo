import React, { useEffect } from 'react'
import { useState } from 'react'
import { ITask } from '../../interfaces/ITask'
import Task from '../Task/Task.module'
import data from '../../data/data'
import Input from '../Input/Input.module'
import { store } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'

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
