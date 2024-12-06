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

import { ref, set } from 'firebase/database';
import { database } from './firebase.js';  // Adjust the path based on your setup
import { v4 as uuidv4 } from 'uuid';  // For generating session IDs



const Home = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [sessionId] = useState(uuidv4());  // Generate a unique session ID per user session
    const [chatHistory, setChatHistory] = useState([]);  // Store the conversation history as an array
    const [loading, setLoading] = useState(false);  // Loading state to show typing indicator

    // Send a welcome message when the chat widget is first loaded
    useEffect(() => {
        addResponseMessage('Hi , You are talking to me!');
    }, []);

    // Function to log messages to Firebase
    const logToFirebase = (userMessage, botResponse) => {
        const timestamp = Date.now();
        const sessionRef = ref(database, `chatSessions/${sessionId}/${timestamp}`);
        set(sessionRef, {
            userMessage,
            botResponse,
            timestamp
        });
    };

    // Handle message submission and send the query to your API
    const handleNewUserMessage = async (newMessage) => {
        if (!newMessage.trim()) return;  // Prevent empty submissions

        // Add new user message to chat history
        const updatedChatHistory = [...chatHistory, { user: newMessage, bot: null }];
        setChatHistory(updatedChatHistory);

        setLoading(true);  // Show loading indicator

        try {
            // Prepare formatted context (user and bot conversations)
            const formattedContext = updatedChatHistory
                .map((entry) => `User: ${entry.user} | Bot: ${entry.bot || 'Pending'}`)
                .join(' || ');

            // Prepare the payload text with query and context
            const textPayload = `New Query: ${newMessage},\nUser's chat Message History:\n` + 
                chatHistory
                    .map((entry, index) => `#${index + 1}\nUser: ${entry.user}\nBot: ${entry.bot || 'Pending'}`)
                    .join('\n\n');

            // Debugging: log the full text being sent to the server
            console.log("Text being sent:", textPayload);

            // Send the query along with the updated context to the API
            const res = await fetch('https://vercel-lyart-gamma.vercel.app/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: textPayload  // Send the current query with context
                }),
            });

            // Load response as raw JSON
            const rawResponse = await res.json();
            console.log("Raw API Response: ", rawResponse);

            // Check if the response has text property
            if (rawResponse && rawResponse.text) {
                addResponseMessage(rawResponse.text);  // Display the bot's response

                // Update chat history with bot response
                const finalChatHistory = [...updatedChatHistory];
                finalChatHistory[finalChatHistory.length - 1].bot = rawResponse.text;  // Add bot response to the latest chat
                setChatHistory(finalChatHistory);  // Update chat history

                // Log the conversation to Firebase
                logToFirebase(newMessage, rawResponse.text);
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
                               href="https://thumbs.dreamstime.com/z/creative-design-come-back-later-message-come-back-later-message-118578152.jpg" 
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
                profileAvatar="https://avatars.githubusercontent.com/u/86841659?v=4"
                title="Aryaveer 2.0"
                subtitle="Welcome to my AI powered chatbot!"
            />

       
        </section>
    );
};

export default Home;
