import { useState, ChangeEvent, MouseEvent } from 'react';
import InputForm from '../InputForm/InputForm';
import Task from './components/Task';
import randomId from '../../helperFuncs/randomId';
import { ITable } from '../../interfaces';
import styles from './Table.module.css';

const Table = ({ title, onCloseTable }: ITable) => {
    const [tasks, setTasks] = useState<{ id: string, task: string }[]>([]);
    const [newTask, setNewTask] = useState('');

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // I would spend more time for better validation
        const value = event?.target?.value?.trim();
        setNewTask(value);
    }

    const handleInputClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // I would spend more time for better validation
        if (!newTask) return;
        const id = randomId(newTask);
        const taskObject = {
            id,
            task: newTask
        };
        setTasks(prevTasks => [...prevTasks, taskObject]);
        setNewTask('');
    }

    const handleButtonClick = (id: string) => {
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
    }

    const handleCloseClick = () => {
        onCloseTable(title.id);
    }

    return (
        <div className={styles.tableContainer}>
            <button className={styles.closeBtn} onClick={handleCloseClick}>Remove❌</button>
            <div className={styles.tableContent}>
                <h3>{title.columnName}</h3>
                <ol>
                    {tasks.map(currTask => (
                        <li key={currTask.id}>
                            <Task key={currTask.id} onHandleClick={handleButtonClick} task={currTask.task} id={currTask.id} />
                        </li>
                    ))}
                </ol>
            </div>
            <InputForm value={newTask} onChangeHandler={changeHandler} onClick={handleInputClick} inputTitle='Enter Row Text' buttonTitle='+ Row' />
        </div>
    );
}

export default Table;
