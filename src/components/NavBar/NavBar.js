import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import NavBarItems from './NavBarItems';

const NavBar = () => {
    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: '#263238', zIndex: 1400 }}>
                <Toolbar sx={{ 
                    justifyContent: 'start',
                    overflowX: 'auto', // Ensure overflow is handled for mobile
                    whiteSpace: 'nowrap', // Prevent items from wrapping
                    '@media (min-width: 600px)': { // For larger screens, remove overflow styles
                        overflowX: 'initial',
                        whiteSpace: 'normal',
                    },
                }}>
                    <NavBarItems />
                </Toolbar>
            </AppBar>
            <Box sx={{ height: 64 }} />
        </>
    );
}

export default NavBar;
