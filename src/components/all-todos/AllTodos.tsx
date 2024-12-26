import { FC } from "react";
import TodoItem from "../../components/todo-item";
import { IAllTodos } from "../../interfaces/ITodo";

const AllTodos: FC<IAllTodos>= ({allTodos, setAllTodos}) => {

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
    <>
      {allTodos.map((todo, index) => (
        <TodoItem
          onDelete={() => handleDelete(index)}
          data={todo.title}
          className={todo.urgent ? "urgent" : ""}
          onComplete={() => handleComplete(index)}
          isCompleted={todo.completed}
        />
      ))}
    </>
  );
};

export default AllTodos;
