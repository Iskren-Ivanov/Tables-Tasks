import { IForm } from '../../interfaces/index';
import styles from './InputForm.module.css';

const Form = ({ value, onChangeHandler, onClick, inputTitle, buttonTitle }: IForm) => (
    <div className={styles.formContainer}>
        <input onChange={onChangeHandler} value={value} placeholder={inputTitle} />
        <button onClick={onClick}>{buttonTitle}</button>
    </div>
)

export default Form;