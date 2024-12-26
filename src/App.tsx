import { FaCircle } from "react-icons/fa";
import "./App.css";
import AllTodos from "./components/all-todos";
import { Box, Container, P, TodosData } from "./App.style";
import Form from "./components/form";
import TodoData from "./components/todo-data";
import { useState } from "react";
import { theme } from "./styles/theme";
import { ITodo } from "./interfaces/ITodo";

function App() {
  const [allTodos, setAllTodos] = useState<ITodo[]>([]);
  const [error, setError] = useState("");

  return (
    <Container>
      <Box>
        <FaCircle color={`${theme.colors.light_red}`} />
        <P>Urgent Tasks</P>
      </Box>
      <Form
        allTodos={allTodos}
        setAllTodos={setAllTodos}
        error={error}
        setError={setError}
      />
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
      <AllTodos allTodos={allTodos} setAllTodos={setAllTodos} />
    </Container>
  );
}

export default App;
