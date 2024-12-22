import { FaTrashAlt } from "react-icons/fa";
import { TodoItemContainer } from "./TodoItem.style";
import { FaCircleCheck } from "react-icons/fa6";

const TodoItem = () => {
  return (
    <TodoItemContainer>
      <FaCircleCheck color="white" />
      items
      <FaTrashAlt color="red" />
    </TodoItemContainer>
  );
};

export default TodoItem;
