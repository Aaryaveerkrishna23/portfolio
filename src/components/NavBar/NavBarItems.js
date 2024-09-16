import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import menuConfig from '../../assets/configs/menuConfig';

const NavBarItems = () => {
    const location = useLocation();

    return (
        <Box sx={{ 
            display: 'flex', 
            justifyContent: 'flex-start', 
            gap: 2,
            flexDirection: 'row', // Ensure items are in a row for horizontal scrolling
            '@media (min-width: 600px)': { // For larger screens, align items normally
                flexDirection: 'row',
            },
        }}>
            {menuConfig.sidebarData.map((item) => (
                <ListItem
                    button
                    component={Link}
                    to={item.path}
                    key={item.id}
                    sx={{
                        color: location.pathname === item.path ? '#ffffff' : '#f5f5f5',
                        display: 'flex',
                        alignItems: 'center',
                        padding: 2,
                        borderBottom: location.pathname === item.path ? '3px solid #ffffff' : 'none',
                    }}
                >
                    <ListItemIcon sx={{ color: '#f5f5f5', minWidth: 40 }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                </ListItem>
            ))}
        </Box>
    );
};

export default NavBarItems;
