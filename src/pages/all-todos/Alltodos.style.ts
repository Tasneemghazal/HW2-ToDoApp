import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    width:30%;
    margin:auto;
    background-color: ${theme.colors.light_pastel_blue};
    padding: 10px;
`;

export const TodosData = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
`;
