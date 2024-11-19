import styled from "styled-components";
export const Container = styled.label`
border: 1px solid #F0F0F0;
width: fit-content;
border-radius:  ${({ radius }) => `${radius}px`};;
padding: 10px 16px;
display: flex;
align-items: center;
flex: 1;
max-width: ${({ width }) => `${width}px`};
height:${({ height }) => `${height}px`};
`
export const Input = styled.input`
flex: 1;
outline: none;
border: none;
padding-left: 5px;
font-family: "Montserrat";
font-size:${({ fontsize }) => `${fontsize}px`};
font-weight: ${({ fontweight }) => fontweight};;
text-align: left;
&::placeholder{
    color:${({ color }) => color ? `${color}` : "#BBC3CD"} ;
}
`