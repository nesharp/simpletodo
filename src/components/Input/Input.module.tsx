import React from "react";
import { useState, useRef } from "react";
import styles from "./Input.module.css";

const Input = () => {
    const [value, setValue] = useState<string>();
    
        

    return (
        <div className={styles.input}>
            <input type="text"  placeholder="Add a new task here" value={value} onChange={(e)=>{setValue(e.target.value)}} />
        </div>
    );
};
export default Input;