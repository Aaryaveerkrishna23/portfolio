import React from 'react';
import { Paper, Typography, Box, useMediaQuery } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';   

import Tags from '../Tags/Tags';

const CustomTimeline = (props) => {
    const { items } = props || {};

    // Detect mobile devices
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Timeline
            position={isMobile ? "right" : "alternate"} // Change to left for mobile
            sx={{ padding: 0 }}
        >
            {items.map((item) => {
                const { id, icon, title, company, description, tags } = item || {};

                return (
                    <TimelineItem key={id} className="MuiTimelineItem-root">
                       <TimelineSeparator>
    <TimelineDot
        sx={{
            backgroundColor: '#263238',
            width: isMobile ? 50 : 48,
            height: isMobile ? 50 : 48,
            border: '2px solid white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: isMobile ? '-30px' : '0px', // Shift the dot further to the right for mobile view
        }}
    >
        <Box sx={{ fontSize: '24px', color: '#FFFFFF' }}>
            {icon}
        </Box>
    </TimelineDot>
    <TimelineConnector 
        sx={{ 
            backgroundColor: '#263238', 
            marginLeft: isMobile ? '-30px' : '0px' // Shift the line to the right for mobile view 
        }} 
    />
</TimelineSeparator>
                        <TimelineContent
                            sx={{
                                py: '12px',
                                px: isMobile ? 2 : 2,
                                width: isMobile ? 'calc(100% - 60px)' : '100%', // Increase width on mobile
                                marginLeft: isMobile ? '-10px' : '0px', // Adjust margin for mobile
                            }}
                            className="MuiTimelineContent-root"
                        >
                           <Paper
    elevation={2}
    sx={{
        p: isMobile ? 3 : 2,
        width: isMobile ? '180px' : 'auto', // Set width to 200px for mobile, auto for desktop
        background: 'linear-gradient(135deg, #f5f5f5 30%, #e8e8e8 90%)',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.03)',
        },
        margin: '0 auto', // Center the Paper component in mobile view
    }}
>
                                <Typography
                                    variant="h5"
                                    component="h1"
                                    sx={{
                                        color: '#263238',
                                        textAlign: 'center',
                                        mb: 1,
                                        fontFamily: 'Roboto, sans-serif',
                                        fontWeight: 600
                                    }}
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        textAlign: 'center',
                                        fontFamily: 'Open Sans, sans-serif',
                                        color: '#757575'
                                    }}
                                >
                                    {company}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        textAlign: 'center',
                                        mb: 2,
                                        fontFamily: 'Open Sans, sans-serif',
                                        color: '#424242'
                                    }}
                                    className="timeline-description"
                                >
                                    {description}
                                </Typography>
                                <Tags id={id} tags={tags} />
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                );
            })}
        </Timeline>
    );
};

export default CustomTimeline;