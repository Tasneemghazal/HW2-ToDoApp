export interface ITodo {
    title: string;
    urgent: boolean;
}

export interface FormProps{
    allTodos: ITodo[];
    setAllTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export interface ToDoDataProps{
    data: string;
    count: number;
}

export interface ToDoItemProps {
    data: string;
    onDelete: () => void;
    className?: string;
}