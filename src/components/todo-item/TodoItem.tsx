import { FaTrashAlt } from "react-icons/fa";
import { TodoItemContainer } from "./TodoItem.style";
import { FaCircleCheck } from "react-icons/fa6";
import { FC } from "react";
import { ToDoItemProps } from "../../interfaces/ITodo";

const TodoItem: FC<ToDoItemProps> = ({onDelete, data, className}) => {
  return (
    <TodoItemContainer className={className}>
      <FaCircleCheck color="white" />
      {data}
      <FaTrashAlt color="red" onClick={onDelete}/>
    </TodoItemContainer>
  );
};

export default TodoItem;
