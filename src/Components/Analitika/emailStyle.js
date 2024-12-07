import styled from "styled-components";

export const Wrapper = styled.div`
border: 1px solid #F0F0F0;
padding: 24px;
border-radius: 8px;
`
export const Info = styled.div`
display: flex;
border-radius: 8px;
transition: 100ms;
&:hover{
    background-color: #F0F5FF;
}
`
export const Section = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: ${({ end }) => end && 'flex-end'};
padding: 12px;
background: inherit;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
font-family: Montserrat;
font-size: 14px;
font-weight: 500;
line-height: 20px;
color: #929FAF;
`

Info.Img = styled.img`
width: 40px;
height: 40px;
margin-right: 24px;
border-radius: 50%;
`

Info.SMS = styled.div`
flex: 1;
display: flex;
align-items: center;
max-width: 230px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
font-family: "Montserrat";
font-size: 14px;
font-weight: 500;
line-height: 20px;
`