import { useState } from "react";
import Form from "../../components/form";
import TodoData from "../../components/todo-data";
import TodoItem from "../../components/todo-item";
import { Container, TodosData } from "./Alltodos.style";
import { ITodo } from "../../interfaces/ITodo";

const AllTodos = () => {
  const [allTodos, setAllTodos] = useState<ITodo[]>([]);

  const handleDelete = (index: number) => {
    setAllTodos(allTodos.filter((_, i) => i != index));
  };
  return (
    <Container>
      <Form allTodos={allTodos} setAllTodos={setAllTodos} />
      <TodosData>
        <TodoData data="Created tasks" count={allTodos.length} />
        <TodoData
          data="Urgent tasks"
          count={allTodos?.filter((todo: ITodo) => todo.urgent).length}
        />
        <TodoData data="Completed tasks" count={allTodos.length} />
      </TodosData>
      {allTodos.map((todo, index) => (
        <TodoItem
          onDelete={() => handleDelete(index)}
          data={todo.title}
          className={todo.urgent ? "urgent" : ""}
        />
      ))}
    </Container>
  );
};

export default AllTodos;
