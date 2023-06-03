import React from 'react';
import { ITask, ITasks } from '../../interfaces/ITask';
import Task from '../Task/Task.module';
import data from '../../data/data';


const Tasks  = (todos:any) => {
   
    return (
        <div>
            {Object.keys(todos).map((key) => <Task key={key} _id={todos[key]._id} text={todos[key].text} isCompleted={todos[key].isCompleted} />)}
        </div>
    );
}
export default Tasks;