import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Link } from "@mui/material";
import { styled } from "@mui/system";

const Logo = styled("img")({
    height: "40px",
    marginRight: "20px",
});

const Navbar: React.FC = () => (
    <AppBar
        position="static"
        sx={{
            backgroundColor: "white",
            boxShadow: "none",
            padding: "10px 20px",
        }}
    >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Left Section: Logo and navigation */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Logo src="/path/to/your/logo.png" alt="Estate Ease Logo" />
                <Typography
                    variant="h6"
                    sx={{ color: "#000", fontWeight: "bold" }}
                >
                    Estate Ease
                </Typography>

                <Box sx={{ display: "flex", marginLeft: "40px" }}>
                    <Link
                        href="#"
                        underline="none"
                        sx={{ color: "#000", marginRight: "20px" }}
                    >
                        For sale
                    </Link>
                    <Link
                        href="#"
                        underline="none"
                        sx={{ color: "gray", marginRight: "20px" }}
                    >
                        For rent
                    </Link>
                    <Link
                        href="#"
                        underline="none"
                        sx={{ color: "gray", marginRight: "20px" }}
                    >
                        About us
                    </Link>
                    <Link href="#" underline="none" sx={{ color: "gray" }}>
                        Contact
                    </Link>
                </Box>
            </Box>

            {/* Right Section: Buttons */}
            <Box>
                <Button
                    variant="outlined"
                    sx={{
                        borderColor: "#00C853",
                        color: "#00C853",
                        marginRight: "15px",
                        textTransform: "none",
                    }}
                >
                    Log in
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#00C853",
                        color: "#fff",
                        textTransform: "none",
                    }}
                >
                    Get started
                </Button>
            </Box>
        </Toolbar>
    </AppBar>
);

export default Navbar;
