import React, { FC, ReactComponentElement, useState } from "react";
import styles from "./Task.module.css";
import { IFTask } from "../../interfaces/ITask";
import { BsTrash } from 'react-icons/bs';
import { deleteData } from "../../logic/logic";
import {data } from "../../data/data";


const Task:FC<IFTask> = ({_id, text, isCompleted, removeTodo}) => {
    const [value, setValue] = useState<string>(text);
    const [completed, setCompleted] = useState<boolean>(isCompleted);
    return (
        <div className={styles.task} key={_id}>
            <input className={styles.checkbox} type="checkbox" checked={completed} onChange={(e)=>{setCompleted(e.target.checked)}} />
            <input className={styles.text} type="text" readOnly value={value} onChange={(e)=>{setValue(e.target.value)}} />
            <button onClick={()=>{removeTodo(_id)}} ><BsTrash className={styles.trash}  /></button>
        </div>
    );
}
export default Task;