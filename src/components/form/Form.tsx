import { FC, useState } from "react";
import Button from "../button";
import Input from "../input";
import { FormComponent, InputContainer, Label, Error} from "./Form.style";
import { FormProps, ITodo} from "../../interfaces/ITodo";

const initialState = {title: "", urgent: false, completed: false,}
const Form:FC<FormProps> = ({allTodos, setAllTodos, error, setError}) => {
  const [todo, setTodo] = useState<ITodo>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, checked, type} = e.target;
    setTodo({...todo, [name]: type === "checkbox"? checked: value});
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.title.trim()) {
      setError("Please enter your to-do");
      return;
    }else{
      setError("");
    }
    setAllTodos([...allTodos, todo]);
    
  }
  return (
    <FormComponent onSubmit={handleSubmit}>
      <InputContainer>
        <Input type="text" name="title" placeholder="Add your to-do"  onChange={handleChange}/>
        <Label>
          Is urgent?
          <Input type="checkbox" name="urgent" checked={todo.urgent} onChange={handleChange}/>
        </Label>
      </InputContainer>
      <Button />
      {error&& <Error>{error}</Error>}
    </FormComponent>
  );
};

export default Form;
