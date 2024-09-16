import React from 'react';
import { Container, Box, Typography, Grid, useMediaQuery } from '@mui/material'; // Use Grid here
import DynamicTyping from '../../components/DynamicTyping';
import About from '../../components/About';
import Timeline from '../../components/Timeline/Timeline';
import homeConfig from '../../assets/configs/homeConfig';

const Home = () => {
    // Detect if it's a mobile screen (width 600px or less)
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <section>
            <Container maxWidth="xl" className="home-content" id="home">
                <Grid 
                    container 
                    justifyContent="center" 
                    alignItems="center" 
                    className="home-header"
                    sx={{ flexDirection: isMobile ? 'column' : 'row' }} // Stack items vertically on mobile
                >
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <Typography
                            variant="h1"
                            sx={{
                                color: '#f5f5f5',
                                fontSize: isMobile ? '2em' : '3em', // Reduce font size for mobile
                                textAlign: 'center',
                            }}
                        >
                            {homeConfig.greeting}
                        </Typography>
                        <Box sx={{ textAlign: 'center', mt: isMobile ? 1 : 2 }}>
                            <DynamicTyping titles={homeConfig.titles} />
                        </Box>
                        <Box sx={{ mt: isMobile ? 2 : 4 }}>
                            <About about={homeConfig.about} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container
                maxWidth="xl"
                className="resume-content"
                id="resume"
                sx={{
                    mt: isMobile ? 4 : 6, // Adjust margin-top for mobile
                    padding: isMobile ? '0 16px' : '0', // Add padding on mobile for better spacing
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: isMobile ? '100%' : '960px', // Take full width on mobile
                        mx: 'auto',
                    }}
                >
                    <Timeline items={homeConfig.workTimeline} />
                </Box>
            </Container>
        </section>
    );
};

export default Home;
