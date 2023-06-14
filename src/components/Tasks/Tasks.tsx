import React from 'react';
import {useState} from 'react';
import { ITask } from '../../interfaces/ITask';
import Task from '../Task/Task.module';
import data from '../../data/data';
import Input from '../Input/Input.module';

const Tasks = () => {
    const [tasks, setTasks] = useState<ITask[]>(data);
    const removeTodo = (id: string) => {
        setTasks(tasks.filter(todo => todo._id !== id));
    }
    const addTodo = (text: string) => {
        
        setTasks([{
            _id: new Date().toString(),
            text: text,
            isCompleted: false
        }, ...tasks])
    }
    return (
        <div>
            <Input addTodo={addTodo} />
            {tasks.map(todo => (
                <Task {...todo} key={todo._id} removeTodo={removeTodo} />
            )
            )}
        </div>
    );
}
export default Tasks;