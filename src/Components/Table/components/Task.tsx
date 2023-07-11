import { MouseEventHandler } from 'react';
import { ITask } from '../../../interfaces';
import styles from './Task.module.css';

const Task = ({ task, id, onHandleClick }: ITask) => {
    const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        onHandleClick(id);
    };

    return (
        <div key={id} className={styles.taskContainer}>
            <div>{task}</div>
            <button onClick={handleButtonClick}>❌</button>
        </div>
    );
}

export default Task;
