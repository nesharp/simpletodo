import React, { FC, ReactComponentElement } from "react";
import styles from "./Tasks.module.css";
import { ITask } from "../../interfaces/ITask";


export const Tasks:FC<ITask> = ({_id, text, isCheck}) => {
    return (
        <div className={styles.tasks}>
            <h2>Tasks</h2>
        </div>
    );
}
export default Tasks;