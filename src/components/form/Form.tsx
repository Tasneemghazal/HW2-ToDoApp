import Button from "../button";
import Input from "../input";
import { FormComponent, InputContainer, Label} from "./Form.style";

const Form = () => {
  return (
    <FormComponent>
      <InputContainer>
        <Input type="text" name="title" placeholder="Add your to-do"/>
        <Label>
          Is urgent?
          <Input type="checkbox" name="urgent" checked/>
        </Label>
      </InputContainer>
      <Button />
    </FormComponent>
  );
};

export default Form;
