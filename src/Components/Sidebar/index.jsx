import { Outlet, useNavigate } from "react-router-dom"
import { Arrow, Body, ChildWrapper, Container, ExitIcon, LogOut, Logo, Menu, MenuItem, Side, Wrapper } from "./style"
import Navbar from "../Navbar"
import Profile from "./Profile"
import sidebar from './../../utils/sidebar';
import React, { useState } from "react";

const Sidebar = () => {
    const [open, setOpen] = useState([])
    const navigate = useNavigate()
    const onClickLogo = () => {
        navigate('/')
    }
    const onLogOut = ()=>{
        navigate('/login')
    }
    const onClickParent = (e, { id, children, path }) => {
        if (open.includes(id)) {
            let data = open.filter(value => id !== value)
            setOpen(data)
        } else {
            setOpen([...open, id])
        }
        if (!children) {
            e.preventDefault()
            navigate(path)
        }
    }
    return (
        <Container>
            <Side>
                <Logo onClick={onClickLogo}>Izzatulloh CRM</Logo>
                <Profile />
                <Menu>
                    {sidebar.map((parent) => {
                        if (parent.icon) {
                            const { icon: Icon } = parent
                            return !parent.hidden ? (
                                <React.Fragment key={parent.id}>
                                    <MenuItem
                                        onClick={(e) => onClickParent(e, parent)}
                                    >
                                        <MenuItem.Title>
                                            <Icon className="icon" />
                                            {parent.title}
                                            {parent?.children ? <Arrow active={open.includes(parent.id).toString()} /> : ''}
                                        </MenuItem.Title>
                                    </MenuItem>
                                    <ChildWrapper active={open.includes(parent.id).toString()}>
                                        {
                                            parent?.children?.map(child => (
                                                <MenuItem key={child.id} to={child.path}>
                                                    <MenuItem.Title>
                                                        {child.title}
                                                    </MenuItem.Title>
                                                </MenuItem>
                                            ))
                                        }
                                    </ChildWrapper>
                                </React.Fragment>
                            )
                                : null
                        }

                    })}
                </Menu>
                <LogOut onClick={onLogOut}>
                    <ExitIcon />
                    Chiqish
                </LogOut>
            </Side>
            <Body>
                <Navbar />
                <Wrapper>
                    <Outlet />
                </Wrapper>
            </Body>
        </Container >
    )
}

export default Sidebar