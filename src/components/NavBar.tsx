import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar: React.FC = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6">EstateEase</Typography>
        </Toolbar>
    </AppBar>
);

export default Navbar;
