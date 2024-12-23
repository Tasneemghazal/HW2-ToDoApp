import styled from "styled-components";
import { theme } from "../../styles/theme";

export const TodoItemContainer = styled.div`
    background-color: ${theme.colors.powder_blue};
    margin: 5px;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
`;