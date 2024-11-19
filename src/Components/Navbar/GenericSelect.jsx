import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

const GenericSelect = () => {
    const [lang, setLang] = useState('uzbek');

    const handleChange = (event) => {
        setLang(event.target.value);
    };
    return (
        <FormControl
            fullWidth
            sx={{ m: 1, minWidth: "100px", width: "150px",border:"none" }}
            size='small'
            
        >
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={lang}
                label="Language"
                onChange={handleChange}
            >
                <MenuItem value={"uzbek"}>Uzbek</MenuItem>
                <MenuItem value={"russian"}>Russian</MenuItem>
                <MenuItem value={"english"}>English</MenuItem>
            </Select>
        </FormControl>
    )
}

export default GenericSelect