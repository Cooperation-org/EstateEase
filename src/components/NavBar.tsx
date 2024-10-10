import { AppBar, Toolbar, Box, IconButton, Button, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EstImage from '../assets/Estate Ease.png';


const Navbar = () => {
    return (
        <Stack>
            <AppBar position="static">
                <Toolbar
                    sx={{
                        width: '100vw',
                        maxWidth: '1440px',
                        justifyContent: 'space-around',
                        height: '90px',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        color: 'white',
                        fontWeight: 'bold',
                        position: 'absolute',
                        top: '7%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 3,
                        '@supports not (background-color: rgba(0, 0, 0, 0.4))': {
                            backgroundColor: 'rgb(0, 0, 0)',
                        },
                    }}
                >
                    {/* Left Section: Home Icon and Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton edge="start" aria-label="home" sx={{ width: '50px', height: '50px', color: '#00D22E' }}>
                            <HomeIcon sx={{ fontSize: '3.5rem' }} />
                        </IconButton>
                        <Box sx={{ mt: 3 }} component="img"

                            src={EstImage}
                        />
                    </Box>

                    {/* Right Section: Navigation and Buttons */}
                    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <Button sx={{ color: '#FFFFFF', textTransform: 'none' }}>For sale</Button>
                        <Button sx={{ color: '#FFFFFF', textTransform: 'none' }}>For rent</Button>
                        <Button sx={{ color: '#ffffff63', textTransform: 'none' }}>About us</Button>
                        <Button sx={{ color: '#ffffff63', textTransform: 'none' }}>Contact</Button>

                        <Button
                            variant="outlined"
                            sx={{
                                color: '#FFFFFF',
                                border: '1px solid #FFFFFF',
                                borderRadius: '14px',
                                width: '109px',
                                height: '50px',
                                textTransform: 'none',
                            }}
                        >
                            Log in
                        </Button>

                        <Button
                            variant="contained"
                            sx={{
                                color: '#050505FF',
                                borderRadius: '14px',
                                width: '139px',
                                height: '50px',
                                backgroundColor: '#FFFFFF',
                                textTransform: 'none',
                            }}
                        >
                            Get started
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Stack>
    );
};

export default Navbar;
