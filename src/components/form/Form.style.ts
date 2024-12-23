import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FormComponent = styled.form`
    padding: 20px;
    background-color: ${theme.colors.lavender_blue};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
`;

export const Label = styled.label`
    margin:5px 0 ;
`;

export const Error = styled.p`
    color: ${theme.colors.red};
`;