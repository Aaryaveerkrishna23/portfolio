import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Grid, useMediaQuery, Button } from '@mui/material';
import DynamicTyping from '../../components/DynamicTyping';
import About from '../../components/About';
import Timeline from '../../components/Timeline/Timeline';
import homeConfig from '../../assets/configs/homeConfig';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './customChatStyles.css';  // Import the custom styles

import logo from './logo.png'; // Sample logo for the avatar

const Home = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [context, setContext] = useState(''); // Store the conversation history as a string
    const [loading, setLoading] = useState(false);

    // Send a welcome message when the chat widget is first loaded
    useEffect(() => {
        addResponseMessage('Hi , You are talking to me!');
    }, []);

    // Handle message submission and send the query to your API
    const handleNewUserMessage = async (newMessage) => {
        if (!newMessage.trim()) return; // Prevent empty submissions

        const updatedContext = `${context}${context ? ' ' : ''}${newMessage}`;
        setContext(updatedContext); // Update context with the new message

        setLoading(true);  // Show loading indicator

        try {
            // Send the query along with the updated context
            const res = await fetch('https://vercel-lyart-gamma.vercel.app/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: `query: ${newMessage}, context: ${context}`,  // Send the current query with context
                }),
            });

            // Load response as raw JSON
            const rawResponse = await res.json();
            console.log("Raw API Response: ", rawResponse);

            // Check if the response has text property
            if (rawResponse && rawResponse.text) {
                addResponseMessage(rawResponse.text); // Display the bot's response
                setContext(`${updatedContext} ${rawResponse.text}`);  // Append the bot's response to the context
            } else {
                addResponseMessage('Error: Invalid response from server.');
            }
        } catch (err) {
            console.error('Error fetching response:', err);
            addResponseMessage('Error: Unable to fetch response. Please try again later.');
        }

        setLoading(false);  // Hide loading indicator after response
    };

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
                        
                        {/* Add Resume Button */}
                        <Box sx={{ mt: 4 }}>
                            <Button 
                               variant="contained" 
                               color="primary"
                               href="https://github.com/Aaryaveerkrishna23/portfolio/raw/main/public/resume.pdf" 
                               target="_blank"
                               download
                           >
                               Download My Resume
                           </Button>
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

            {/* Chat Widget */}
            <Widget
                handleNewUserMessage={handleNewUserMessage}
                profileAvatar={logo}
                title="Aryaveer 2.0"
                subtitle="Welcome to my AI powered chatbot!"
            />
        </section>
    );
};

export default Home;
