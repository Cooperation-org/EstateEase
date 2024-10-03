import React from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
} from "@mui/material";

const SearchFilter: React.FC = () => {
    return (
        <Box
            sx={{
                p: 3,
                backgroundColor: "#f9f9f9",
                borderRadius: "10px",
                maxWidth: "400px",
                margin: "auto",
            }}
        >
            <Typography variant="h6" gutterBottom>
                Search Filter
            </Typography>

            {/* Location */}
            <FormControl fullWidth margin="normal">
                <InputLabel>Location</InputLabel>
                <Select defaultValue="" label="Location">
                    <MenuItem value="location1">
                        Select a location in Nigeria
                    </MenuItem>
                    <MenuItem value="lagos">Lagos</MenuItem>
                    <MenuItem value="abuja">Abuja</MenuItem>
                </Select>
            </FormControl>

            {/* Category */}
            <FormControl fullWidth margin="normal">
                <InputLabel>Category</InputLabel>
                <Select defaultValue="rent" label="Category">
                    <MenuItem value="rent">For rent</MenuItem>
                    <MenuItem value="sale">For sale</MenuItem>
                </Select>
            </FormControl>

            {/* Property Type */}
            <FormControl fullWidth margin="normal">
                <InputLabel>Property Type</InputLabel>
                <Select defaultValue="all" label="Property Type">
                    <MenuItem value="all">All types</MenuItem>
                    <MenuItem value="house">House</MenuItem>
                    <MenuItem value="apartment">Apartment</MenuItem>
                </Select>
            </FormControl>

            {/* Furnishing */}
            <FormControl fullWidth margin="normal">
                <InputLabel>Furnishing</InputLabel>
                <Select defaultValue="all" label="Furnishing">
                    <MenuItem value="all">All types</MenuItem>
                    <MenuItem value="furnished">Furnished</MenuItem>
                    <MenuItem value="unfurnished">Unfurnished</MenuItem>
                </Select>
            </FormControl>

            {/* Price Range */}
            <Box display="flex" justifyContent="space-between" mt={2} mb={2}>
                <TextField
                    label="Min price"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    sx={{ mr: 1 }}
                />
                <TextField
                    label="Max price"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    sx={{ ml: 1 }}
                />
            </Box>

            {/* Button */}
            <Button variant="contained" color="primary" fullWidth>
                60 results found
            </Button>

            {/* Additional link */}
            <Box mt={2} textAlign="center">
                <Typography variant="body2">
                    Can’t find what you’re looking for?{" "}
                    <a href="#">Make a request</a>
                </Typography>
            </Box>
        </Box>
    );
};

export default SearchFilter;
