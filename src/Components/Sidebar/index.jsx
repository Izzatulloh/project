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
    const onLogOut = () => {
        navigate('/login')
    }
    const onClickParent = (e, { id, children, path,title }) => {
        e.preventDefault()

        if (open.includes(id)) {
            let data = open.filter(value => id !== value)
            localStorage.setItem('open', JSON.stringify(data))
            setOpen(data)
        } else {
            localStorage.setItem('open', JSON.stringify([...open, id]))
            setOpen([...open, id])
        }
        if (!children) {
            navigate(path,{ state: {parent:title} })
        }
    }
    const onClickChild = (e,child,parent,path ) => {
        e.preventDefault()
        navigate(path,{ state: {parent,child} })
    }
    return (
        <Container>
            <Side>
                <Logo onClick={onClickLogo}>Izzatulloh CRM</Logo>
                <Profile />
                <Menu>
                    {sidebar.map((parent) => {
                        const active = open.includes(parent.id)
                        const { icon: Icon } = parent
                        const activePath = location.pathname?.includes(parent.path);
                        return !parent.hidden ? (
                            <React.Fragment key={parent.id}>
                                <MenuItem
                                    onClick={(e) => onClickParent(e, parent)}
                                    active={activePath.toString()}
                                >
                                    <MenuItem.Title active={activePath.toString()}>
                                        <Icon className="icon" />
                                        {parent.title}
                                        {parent?.children ? <Arrow active={active.toString()} /> : ''}
                                    </MenuItem.Title>
                                </MenuItem>
                                <ChildWrapper active={active.toString()}>
                                    {
                                        parent?.children?.map(child => (
                                            <MenuItem
                                                key={child.id}
                                                to={child.path}
                                                onClick={(e) => onClickChild(e,child.title,parent.title,child.path)}
                                                active={(location.pathname === child.path).toString()}
                                            >
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