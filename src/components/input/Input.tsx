import { FC } from "react"
import { InputComponent } from "./Input.style"
import { IProps } from "../../interfaces/IInput"

const Input: FC<IProps> = ({type, name, placeholder, value, onChange}) => {
  return (
    <InputComponent type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
  )
}

export default Input