import React, { useState } from 'react'
import GenericTable from '../../Generics/Table'
import { Action, Container } from './style'
import BreadCrumb from '../../Generics/BreadCrumb'
import GenericButton from './../../Generics/Button/index';

const AllLids = () => {
    const [open, setOpen] = useState(false)
    const onEdit = (e) => {
        e.stopPropagation()
        console.log('edit');
    }
    const onMove = (e) => {
        e.stopPropagation()
        console.log('move');
    }
    const headCells = [
        {
            id: 'name',
            label: 'O’quvchining ismi',
        },
        {
            id: 'group',
            label: 'Guruh / Fan',
        },
        {
            id: 'date',
            label: 'Dars kuni va vaqti',
        },
        {
            id: 'addedDate',
            label: 'Qo’shilgan sana',
        },
        {
            id: 'admin',
            label: 'Moderator',
        },
        {
            id: 'action',
            label: '',
            render: (
                <Action >
                    <Action.Edit onClick={onEdit} />
                    <Action.Move onClick={onMove} />
                </Action>
            )
        },

    ]
    const rows = [
        {
            id: 1,
            name: 'O’quvchining ismi',
            group: "Frontend",
            date: new Date().toLocaleDateString(),
            addedDate: "13.12.2024",
            admin: "Admin"
        },
        {
            id: 2,
            name: 'O’quvchining ismi',
            group: "Frontend",
            date: new Date().toLocaleDateString(),
            addedDate: "13.12.2024",
            admin: "Admin"
        },
        {
            id: 3,
            name: 'O’quvchining ismi',
            group: "Frontend",
            date: new Date().toLocaleDateString(),
            addedDate: "13.12.2024",
            admin: "Admin"
        },
        {
            id: 4,
            name: 'O’quvchining ismi',
            group: "Frontend",
            date: new Date().toLocaleDateString(),
            addedDate: "13.12.2024",
            admin: "Admin"
        },

    ]
    return (
        <Container>
            <BreadCrumb >
                <GenericButton type="import" onClick={() => setOpen(!open)}>Import</GenericButton>
                <GenericButton type="filter" onClick={() => setOpen(!open)}>Filter</GenericButton>
                <GenericButton type="add" onClick={() => setOpen(!open)}>Buyurtma qo’shish</GenericButton>
            </BreadCrumb>

            <GenericTable open={open} headCells={headCells} rows={rows} />
        </Container>
    )
}

export default AllLids