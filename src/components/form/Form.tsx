import Button from "../button";
import Input from "../input";
import { FormComponent, InputContainer} from "./Form.style";

const Form = () => {
  return (
    <FormComponent>
      <InputContainer>
        <Input />
      </InputContainer>
      <Button />
    </FormComponent>
  );
};

export default Form;
