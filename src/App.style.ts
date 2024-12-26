import styled from "styled-components";
import { theme } from "../src/styles/theme";

export const Container = styled.div`
  width: 30%;
  margin: auto;
  background-color: ${theme.colors.light_pastel_blue};
  padding: 10px;
`;

export const TodosData = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const P = styled.p`
  margin-left: 5px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
