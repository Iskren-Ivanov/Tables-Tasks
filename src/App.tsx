import { useState, MouseEvent, ChangeEvent } from 'react';
import InputForm from './Components/InputForm/InputForm';
import Table from './Components/Table/Table';
import { ITitle } from './interfaces';
import randomId from './helperFuncs/randomId';

import styles from './App.module.css';

const App = () => {
  const [columnNames, setColumnNames] = useState<ITitle[]>([]);
  const [columnName, setColumnName] = useState('');

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    // I would spend more time for better validation
    const title = event?.target?.value?.trim();
    title && setColumnName(title);
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // I would spend more time for better validation
    if (!columnName) return;
    const columnId = randomId(columnName);

    const columnObject: ITitle = {
      id: columnId,
      columnName
    }

    setColumnNames(prevColumnNames => [...prevColumnNames, columnObject]);
    setColumnName('');
  }

  const handleCloseTable = (id: string) => {
    const filteredColumn = columnNames.filter(columnName => columnName.id !== id);
    setColumnNames(filteredColumn);
  }

  return (
    <div className={styles.appContainer}>
      <div>
        <InputForm value={columnName} onChangeHandler={changeHandler} onClick={handleClick} inputTitle='Enter Column Name' buttonTitle='+ Columns' />
      </div>
      <div className={styles.appContainer_table}>
        {columnNames.map((title: ITitle) => (
          <Table key={title.id} title={title} onCloseTable={handleCloseTable} />
        ))}
      </div>
    </div>
  );
}

export default App;
