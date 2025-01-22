import styled from "styled-components";
import filter from "../../../assets/icons/filter.svg?react";
import imp from "../../../assets/icons/import.svg?react";
import add from "../../../assets/icons/add.svg?react";

export const Icons = styled.div``
export const Import = styled.div``
export const Plus = styled.div``
Icons.Filter = styled(filter)`
    & path{
        fill: #fff;
}
`;
Icons.Import = styled(imp)``;
Icons.Plus = styled(add)``;
export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
background-color: #fff;
border: 1px solid var(--primaryColor);
border-radius: 8px;
padding: 10px 16px;
cursor: pointer;
font-size: 14px;
font-weight: 500;
line-height: 20px;
text-align: left;
gap: 8px;
color: var(--primaryColor);
user-select: none;
-webkit-user-select: none;
&:active{
    transform: scale(0.98);
    opacity: 0.9;
}

`
Button.Primary = styled(Button)`

`
Button.Filter = styled(Button)`
background-color: var(--primaryColor);
color: #fff;
border:0;
`
Button.Import = styled(Button)`
border:0;
`
Button.Delete = styled(Button)`
border-color: #FFA39E;
color: #F5222D;
`
Button.Add = styled(Button)`
background-color: ${({ bgcolor }) => bgcolor ? bgcolor : "#1890FF"};
color: #fff;
border:0;
`