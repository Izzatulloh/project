import styled from "styled-components";
const Container = styled.div`
display: flex;
align-items: center;
font-family: "Montserrat";

font-weight: 500;
font-size: ${({size})=> size ? `${size}px` : "16px"};
color: ${({color})=> color ? color : "var(--primaryColor)"};
margin-top: ${({ mt }) => `${mt}px`};
margin-bottom: ${({ mb }) => `${mb}px`};
margin-left: ${({ ml }) => `${ml}px`};
margin-right: ${({ mr }) => `${mr}px`};
padding-top: ${({ pt }) => `${pt}px`};
padding-bottom: ${({ pb }) => `${pb}px`};
padding-left: ${({ pl }) => `${pl}px`};
padding-right: ${({ pr }) => `${pr}px`};
`
const Counter = styled.span`
background-color: #1890FF;
font-family: "Montserrat";
font-size: 12px;
font-weight: 500;
line-height: 20px;
width: 28px;
height: 28px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
color: #fff;
margin-left: 8px;

`

export { Container,Counter }
