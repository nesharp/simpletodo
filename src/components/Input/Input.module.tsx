import React, { useState, FC } from "react";
import styles from "./Input.module.css";
import { IAddFunc } from "../../interfaces/ITask";

const Input: FC<IAddFunc> = ({ addTodo }) => {
    const [title, setTitle] = useState<string>('');
    
        

    return (
        <div className={styles.input}>
            <input type="text" placeholder="Add a new task here" value={title} onChange={(e) => { setTitle(e.target.value) }} onKeyDown={e =>  e.key === 'Enter' && addTodo(title) } onKeyUp={(e)=>e.key === "Enter" && setTitle("")} />
        </div>
    );
};
export default Input;