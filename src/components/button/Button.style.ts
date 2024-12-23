import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledButton = styled.button`
    width: 100%;
    padding: 10px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${theme.colors.lime_green};
    &:hover{
        background-color: ${theme.colors.dark_lime_green};
    }
`;