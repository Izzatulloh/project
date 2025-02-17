import styled from "styled-components";
import edit from "../../../assets/icons/edit.svg?react";

export const Container = styled.div``
export const Action = styled.div`
display: flex;
justify-content: flex-end;
`

Action.Edit = styled(edit)`
padding: 10px;
width: 42px;
height: 42px;
`;
Action.Move = styled(edit)`
padding: 10px;
width: 42px;
height: 42px;`;