import { ChangeEvent, MouseEvent } from 'react';

interface IForm {
    value: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    inputTitle: string;
    buttonTitle: string;
}

export default IForm;
