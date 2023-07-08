import React, { FC, useState } from 'react'
import styles from './Task.module.css'
import { ITask } from '../../interfaces/ITask'
import { BsTrash } from 'react-icons/bs'
import { useActions } from '../../hooks/useActions'

const Task: FC<ITask> = ({ _id, text, isCompleted }) => {
    const [value, setValue] = useState<string>(text)
    const [completed, setCompleted] = useState<boolean>(isCompleted)
    const { deleteTodo, changeTodoState, changeTodoText } = useActions()

    return (
        <div className={styles.task} key={_id}>
            <input
                className={styles.checkbox}
                type="checkbox"
                checked={completed}
                onChange={(e) => {
                    changeTodoState(_id)
                    setCompleted(!completed)
                }}
            />
            <input
                className={styles.text}
                type="text"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                    changeTodoText({ _id, value })
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        changeTodoText({ _id, value })
                        e.currentTarget.blur()
                    }
                }}
            />
            <button
                onClick={() => {
                    deleteTodo(_id)
                }}
            >
                <BsTrash className={styles.trash} />
            </button>
        </div>
    )
}
export default Task
