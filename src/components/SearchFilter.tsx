import React from "react";
import { Box, TextField, Button } from "@mui/material";

const SearchFilter: React.FC = () => {
    return (
        <Box>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" fullWidth>
                Search
            </Button>
        </Box>
    );
};

export default SearchFilter;
