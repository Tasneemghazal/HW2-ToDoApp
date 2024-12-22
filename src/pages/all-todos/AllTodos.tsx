import Form from "../../components/form";
import TodoData from "../../components/todo-data";
import TodoItem from "../../components/todo-item";
import { Container, TodosData } from "./Alltodos.style";

const AllTodos = () => {
  return (
    <Container>
      <Form />
      <TodosData>
        <TodoData />
        <TodoData />
        <TodoData />
      </TodosData>
      <TodoItem />
    </Container>
  );
};

export default AllTodos;
