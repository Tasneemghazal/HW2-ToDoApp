export interface ITodo {
    title: string;
    urgent: boolean;
    completed: boolean;
}

export interface FormProps{
    allTodos: ITodo[];
    setAllTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
    error:string;
    setError: React.Dispatch<React.SetStateAction<string>>;
}

export interface ToDoDataProps{
    data: string;
    count: number;
}

export interface ToDoItemProps {
    data: string;
    onDelete: () => void;
    className?: string;
    onComplete: () => void;
    isCompleted: boolean;
}

export interface IAllTodos {
    allTodos: ITodo[];
    setAllTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}