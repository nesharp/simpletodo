import React, { useState, FC } from 'react'
import styles from './Input.module.css'
import { useActions } from '../../hooks/useActions'
const Input: FC = () => {
    const [title, setTitle] = useState<string>('')
    const { createTodo } = useActions()
    return (
        <div className={styles.input}>
            <input
                type="text"
                placeholder="Add a new task here"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
                onKeyDown={(e) => e.key === 'Enter' && createTodo(title)}
                onKeyUp={(e) => e.key === 'Enter' && setTitle('')}
            />
        </div>
    )
}
export default Input
