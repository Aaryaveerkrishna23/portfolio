import React from 'react';
import { Container, Grid2, Box, Typography } from '@mui/material';
import DynamicTyping from '../../components/DynamicTyping';
import About from '../../components/About';
import Timeline from '../../components/Timeline/Timeline';
import homeConfig from '../../assets/configs/homeConfig';

const Home = () => {
    return (
        <section>
            <Container maxWidth="xl" className="home-content" id="home">
                <Grid2 container justifyContent="center" alignItems="center" className="home-header">
                    <Grid2 item xs={12} sx={{ textAlign: 'center' }}>
                        <Typography
                            variant="h1"
                            sx={{
                                color: '#f5f5f5',
                                fontSize: '3em',
                                transition: 'color 0.3s ease',
                                '&:hover': {
                                    color: '#e0e0e0',
                                },
                            }}
                        >
                            {homeConfig.greeting}
                        </Typography>
                        <Box
                            sx={{
                                textAlign: 'center',
                                mt: 2,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                },
                            }}
                        >
                            <DynamicTyping titles={homeConfig.titles} />
                        </Box>
                        <Box
                            sx={{
                                mt: 4,
                                transition: 'opacity 0.3s ease',
                                '&:hover': {
                                    opacity: 0.8,
                                },
                            }}
                        >
                            <About about={homeConfig.about} />
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
            <Container
                maxWidth="xl"
                className="resume-content"
                id="resume"
                sx={{
                    mt: 6,
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                        backgroundColor: '#f0f0f0',
                    },
                }}
            >
                <Box sx={{ width: '100%', maxWidth: '960px', mx: 'auto' }}>
                    <Timeline items={homeConfig.workTimeline} />
                </Box>
            </Container>
        </section>
    );
}

export default Home;
