import React from 'react'
import GenericTable from '../../Generics/Table'
import { Container } from './style'

const AllLids = () => {
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
            <GenericTable headCells={headCells} rows={rows} />
        </Container>
    )
}

export default AllLids