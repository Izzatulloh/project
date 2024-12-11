import styled from "styled-components"
import arrow from "../../assets/icons/rightArrow.svg?react";
import exit from "../../assets/icons/exit.svg?react";
import { NavLink } from "react-router-dom";

const Container = styled.div`
    display: flex;
`;

const Side = styled.div`
    width: 280px;
    max-width: 280px;
    min-width: 280px;
    height: 100vh;
    overflow: hidden;
    overflow-y: scroll;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    &::-webkit-scrollbar{
        width: 0;
    }


`;
const Body = styled.div`
    flex: 1;
    overflow: hidden;
    min-width: calc(1440px);
    overflow-y: scroll;
    overflow-x: scroll;
    height: 100vh;

`;
const Wrapper = styled.div`
   margin: 16px;
   background-color: #fff;
   border-radius: 8px;
`;
const Logo = styled.div`
    font-weight: 600;
    size: 20px;
    line-height: 1.5;
    padding: 16px  24px;
    color: #1890FF;
    border-bottom: 1px solid rgb(222,225,227);  
    cursor: pointer; 
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: #fff;
`
const LogOut = styled(Logo)`
    border-bottom: 0;
    border-top:1px solid rgb(222,225,227); 
    display: flex;
    margin-top: auto;
    align-items: center;
    gap: 15px;
`;
// Profile start
const ProfileContainer = styled.div`
    display: flex;
    justify-content:center ;
    align-items: center;
    gap: 15px;
    margin: 24px;

`
ProfileContainer.Image = styled.img`
width:48px;
height: 48px;
object-fit: cover;
object-position: top;
border-radius: 50%;
`
ProfileContainer.Name = styled.div`
font-weight: 600;
size: 14px;
line-height: 20px;
color: var(--primaryColor);
white-space: nowrap;
text-overflow: ellipsis;
width: 170px;
overflow: hidden;
`
ProfileContainer.Email = styled.div`
font-weight: 500;
size: 12px;
color: var(--secondaryColor);
white-space: nowrap;
text-overflow: ellipsis;
width: 180px;
overflow: hidden;
`
// Profile end
// Menu start
const Menu = styled.div`
    display: flex;
    flex-direction: column;

`
const MenuItem = styled(NavLink)`
    display: flex;
    text-decoration: none;
    color: var(--primaryColor);
    background-color: ${({ active }) =>
        active === "true" && `rgba(248, 250, 252, 1)`};
  color: ${({ active }) =>
        active === "true" ? `var(--activeColor)` : `var(--primaryColor)`};
`
MenuItem.Title = styled.div`
flex: 1;
size: 14px;
font-weight: 500;
line-height: 20px;
padding: 12px 24px; 
transition: 300ms;
display: flex;
align-items: center;
& path{
    fill: ${({ active }) => active === "true" && " var(--activeColor)"};
        transition: 300ms;
    }
&:hover{
    color: var(--activeColor);
    cursor: pointer;
    background-color: #F8FAFC;
    & path{
        fill: var(--activeColor);
    }
}
.icon{
    margin-right: 16px;

}
`
const Arrow = styled(arrow)`
display: flex;
margin-left: auto;
transition: 100ms;
transform: ${({ active }) => active == "true" && `rotate(90deg)`};
transition:0.3s;
`
// Menu end

const ChildWrapper = styled.div`
margin-left: 35px;
height: ${({ active }) => active == "true" ? 'auto' : '0px'};
overflow: hidden;
transition:0.3s;
`
const ExitIcon = styled(exit)``

export { ExitIcon, ChildWrapper, Container, Side, Body, Wrapper, Logo, LogOut, ProfileContainer, Menu, MenuItem, Arrow }