import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

const GenericSelect = (props) => {
    const { data, value } = props
    const [defaultValue, setDefaultValue] = useState(value || data && data[0]?.value);
    const handleChange = (event) => {
        setDefaultValue(event.target.value);
    };
    return (
        <FormControl
            fullWidth
            sx={{ m: 1, minWidth: "100px", width: "150px", border: "none" }}
            size='small'
        >
            <Select
                sx={{ color: "var(--primaryColor)", borderColor: "#929FAF" }}
                value={defaultValue || "Select"}
                onChange={handleChange}
            >
                {
                    data?.map((item) => {
                        return <MenuItem sx={{ color: "#929FAF" }} key={item.value} value={item.value}>{item.title}</MenuItem>
                    })
                }
            </Select>
        </FormControl>
    )
}

export default GenericSelect