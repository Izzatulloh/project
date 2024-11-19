import styled from "styled-components";
import search from "../../assets/icons/search.svg?react"
const Container = styled.div`
flex: 1;
background-color: #fff;
height: 60px;
box-shadow: 0px 8px 19px 0px #F5F6F8;
background-color: #fff;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 16px 0 24px;
position: sticky;
top: 0;
`
const InputWrapper = styled.label`
border: 1px solid #F0F0F0;
width: fit-content;
border-radius: 8px;
padding: 10px 16px;
display: flex;
align-items: center;
flex: 1;
max-width: 500px;
`
const Input = styled.input`
flex: 1;
outline: none;
border: none;
padding-left: 5px;
font-family: "Montserrat";
font-size: 15px;
font-weight: 500;
line-height: 20px;
text-align: left;
&::placeholder{
    color: #BBC3CD;
}
`
const SearchIcon = styled(search)`
`;

const Section = styled.div`
display:flex;
align-items: center;
gap: 16px;
`
const TimeDiv = styled.div`
    display: flex;
`
const Timer = styled.div`
 color: ${({ status }) => status ? "var(--secondaryColor)" : "var(--primaryColor)"};
 font-weight: 600;
 font-size: 24px;
 line-height: 32px;
 padding: 5px;
 `;



export { Container, InputWrapper, Input, SearchIcon, Section, Timer, TimeDiv }