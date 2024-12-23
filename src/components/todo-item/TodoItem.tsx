import { FaTrashAlt } from "react-icons/fa";
import { TodoItemContainer } from "./TodoItem.style";
import { FaCircleCheck } from "react-icons/fa6";
import { FC } from "react";
import { ToDoItemProps } from "../../interfaces/ITodo";
import { theme } from "../../styles/theme";

const TodoItem: FC<ToDoItemProps> = ({onDelete, data, className, onComplete, isCompleted}) => {
  return (
    <TodoItemContainer className={className}>
      <FaCircleCheck color={isCompleted? theme.colors.lime_green: theme.colors.white} onClick={onComplete} />
      {data}
      <FaTrashAlt color={theme.colors.red} onClick={onDelete} />
    </TodoItemContainer>
  );
};

export default TodoItem;
