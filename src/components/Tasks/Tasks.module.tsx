import React, { FC, ReactComponentElement } from "react";
import styles from "./Tasks.module.css";
import { useState } from "react";
import { ITask } from "../../interfaces/ITask";
import {BsTrash} from 'react-icons/bs';

const Task:FC<ITask> = ({_id, text, isCompleted}) => {
    const [value, setValue] = useState<string>(text);
    const [completed, setCompleted] = useState<boolean>(isCompleted);
    return (
        <div className={styles.task} key={_id}>
            <input className={styles.checkbox} type="checkbox" checked={completed} onChange={(e)=>{setCompleted(e.target.checked)}} />
            <input className={styles.text} type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />
            <BsTrash className={styles.trash}  />
        </div>
    );
}
export default Task;