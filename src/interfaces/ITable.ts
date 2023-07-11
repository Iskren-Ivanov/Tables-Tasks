import ITitle from './ITitle';

interface ITable {
    title: ITitle;
    onCloseTable: (id: string) => void;
}

export default ITable;
