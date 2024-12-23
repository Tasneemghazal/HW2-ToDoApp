import { FC } from "react";
import { TodoDataContainer } from "./TodoData.style";
import { ToDoDataProps } from "../../interfaces/ITodo";

const TodoData: FC<ToDoDataProps> = ({data, count}) => {
  return <TodoDataContainer>
    {`${data}  ${count}`}
  </TodoDataContainer>;
};

export default TodoData;
