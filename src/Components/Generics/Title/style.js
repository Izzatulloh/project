import styled from "styled-components";
 const Container = styled.div`
 display: inherit;
 align-items: inherit;
font-family: "Montserrat";
font-size: 20px;
font-weight: ${({type})=> (!type || type =="primary" ? 600 : 400)};
line-height: 28px;
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


export {Container}
