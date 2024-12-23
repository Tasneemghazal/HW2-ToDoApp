import { useState } from "react";
import Form from "../../components/form";
import TodoData from "../../components/todo-data";
import TodoItem from "../../components/todo-item";
import { Box, Container, TodosData } from "./Alltodos.style";
import { ITodo } from "../../interfaces/ITodo";
import { FaCircle } from "react-icons/fa";
import { theme } from "../../styles/theme";

const AllTodos = () => {
  const [allTodos, setAllTodos] = useState<ITodo[]>([]);

  const handleDelete = (index: number) => {
    setAllTodos(allTodos.filter((_, i) => i != index));
  };

  const handleComplete = (index: number) => {
    setAllTodos(
      allTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <Container>
      <Box>
        <FaCircle color={`${theme.colors.light_red}`} />
        Urgent Task
      </Box>
      <Form allTodos={allTodos} setAllTodos={setAllTodos} />
      <TodosData>
        <TodoData data="Created tasks" count={allTodos.length} />
        <TodoData
          data="Urgent tasks"
          count={allTodos?.filter((todo: ITodo) => todo.urgent).length}
        />
        <TodoData
          data="Completed tasks"
          count={allTodos?.filter((todo: ITodo) => todo.completed).length}
        />
      </TodosData>
      {allTodos.map((todo, index) => (
        <TodoItem
          onDelete={() => handleDelete(index)}
          data={todo.title}
          className={todo.urgent ? "urgent" : ""}
          onComplete={() => handleComplete(index)}
        />
      ))}
    </Container>
  );
};

export default AllTodos;
