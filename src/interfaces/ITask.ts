interface ITask {
    task: any;
    id: string;
    onHandleClick: (id: string) => void;
}

export default ITask;