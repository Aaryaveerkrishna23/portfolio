import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import CardIcons from './CardIcons';

const CardItem = (props) => {
    const { item } = props;
    
    return (
        <a
            href={item.links[0].url} // Make the entire card a clickable link
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }} // Remove link styling
        >
            <Card
                sx={{
                    width: { xs: '90%', sm: 380 }, // 90% width for mobile, fixed width for larger screens
                    height: { xs: 'auto', sm: 450 }, // Auto height for mobile, fixed height for larger screens
                    m: 2,
                    backgroundColor: '#F6F6F6',
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    maxWidth: 380, // Optional: maxWidth to prevent cards from becoming too wide
                    cursor: 'pointer', // Make the card cursor show as a pointer
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.05)', // Add hover effect
                    },
                }}
            >
                <CardMedia
                    component="div"
                    sx={{
                        backgroundImage: `url(${item.image})`,
                        height: { xs: 160, sm: 220 }, // Adjust the height for mobile devices
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    alt={item.title}
                />
                <CardContent
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        p: 2,
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" component="div" textAlign="center">
                            <strong>{item.title}</strong>
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            textAlign="center"
                            sx={{ mt: 1 }}
                        >
                            {item.description}
                        </Typography>
                    </Box>
                    <Box sx={{ borderTop: 1, borderColor: 'divider', my: 1 }} />
                    <CardIcons item={item} sx={{ py: 0.3 }} />
                </CardContent>
            </Card>
        </a>
    );
}

export default CardItem;
