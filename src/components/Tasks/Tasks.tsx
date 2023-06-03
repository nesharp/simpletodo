import React from 'react';
import {useState} from 'react';
import { ITask } from '../../interfaces/ITask';
import Task from '../Task/Task.module';
import data from '../../data/data';

const Tasks = () => {
    const [tasks, setTasks] = useState<ITask[]>(data);
    const removeTodo = (id: string) => {
        setTasks(tasks.filter(todo => todo._id !== id));
    }
    return (
        <div>
            
            {tasks.map(todo => (
                <Task {...todo} key={todo._id} removeTodo={removeTodo} />
            )
            )}
        </div>
    );
}
export default Tasks;