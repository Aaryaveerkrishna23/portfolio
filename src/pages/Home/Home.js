import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Grid, useMediaQuery, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, CircularProgress } from '@mui/material';
import DynamicTyping from '../../components/DynamicTyping';
import About from '../../components/About';
import Timeline from '../../components/Timeline/Timeline';
import homeConfig from '../../assets/configs/homeConfig';
import SearchIcon from '@mui/icons-material/Search'; // For the Google-style search icon

const Home = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    // State for chat popup
    const [openChat, setOpenChat] = useState(false);
    const [query, setQuery] = useState('');
    const [messages, setMessages] = useState([]); // Store both user and bot messages
    const [context, setContext] = useState(''); // Store the conversation history as a string
    const [loading, setLoading] = useState(false);

    // Handle opening/closing chat popup
    const handleOpenChat = () => setOpenChat(true);
    const handleCloseChat = () => {
        setOpenChat(false);
        setQuery('');
        setMessages([]);  // Clear messages when closing chat
        setContext('');    // Clear the context as well
        setLoading(false);
    };

    // Automatically scroll to the bottom of the chat on new messages
    useEffect(() => {
        const chatContainer = document.getElementById('chat-container');
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [messages]);

    // Handle submitting chat query
    const handleSubmit = async () => {
        if (!query.trim()) return; // Prevent empty submissions

        // Add user message to chat
        setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: query }]);
        const newContext = context ? `past queries: ${context}` : '';
        
        // Append current query to context
        const updatedContext = `${context}${context ? ' ' : ''}${query}`;
        setContext(updatedContext); // Update the context with the new query

        setQuery('');  // Clear input field after submission
        setLoading(true);  // Show loading indicator

        try {
            // Send the query along with the updated context
            const res = await fetch('https://vercel-lyart-gamma.vercel.app/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: `query: ${query}, context: ${newContext}`,  // Send the current query with context
                }),
            });

            // Load response as raw JSON and log it for inspection
            const rawResponse = await res.json();
            console.log("Raw API Response: ", rawResponse);

            // Check if the response has text property
            if (rawResponse && rawResponse.text) {
                setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: rawResponse.text }]);
                setContext(`${updatedContext} ${rawResponse.text}`);  // Append the bot's response to the context
            } else {
                setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'Error: Invalid response from server.' }]);
            }
        } catch (err) {
            console.error('Error fetching response:', err);
            setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'Error: Unable to fetch response. Please try again later.' }]);
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

   {/* Chat Button */}
<Box sx={{ position: 'fixed', top: isMobile ? 209 : 40, right: isMobile ? 35 : 20, zIndex: 1500 }}>
    <Button
        variant="contained"
        onClick={handleOpenChat}
        sx={{
            borderRadius: '24px', // Rounded shape like the Google search bar
            padding: '10px 40px', // Increased padding for horizontal stretch
            backgroundColor: '#e5e6e8', // Slightly darker grey
            color: '#3c4043', // Dark grey for the text
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
            minWidth: '150px', // Ensure it stretches horizontally
            '&:hover': {
                backgroundColor: '#d5d5d5', // Slightly darker grey on hover
                boxShadow: '0px 4px 6px rgba(0.4,.5,0.6,0.7)', // Stronger shadow on hover
            },
            textTransform: 'none', // Prevents text from being uppercase
        }}
    >
       
      

<Typography
  variant="button"
  sx={{
    fontSize: '0.7em',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontWeight: 300,
    position: 'relative',
    display: 'inline-block',
    animation: 'blink 1s step-start infinite, fadeIn 1s ease-in-out infinite',
    '@keyframes blink': {
      '50%': { opacity: 0 }
    },
    '@keyframes fadeIn': {
      '0%': { opacity: 0, },
      '100%': { opacity: 1 }
    }
  }}
>
  Chat with me......
</Typography>




    </Button>
   
</Box>




            {/* Chat Dialog */}
            <Dialog open={openChat} onClose={handleCloseChat} fullWidth maxWidth={isMobile ? 'xs' : 'sm'}>
                <DialogTitle>Chat with Us</DialogTitle>
                <DialogContent
                    sx={{
                        '& .MuiDialog-paper': {
                          width: isMobile ? '90%' : '80%', // Adjust width as needed
                          height: isMobile ? '300px' : '400px', // Adjust height as needed
                          maxHeight: '50vh', // Constrain maximum height
                          padding: '16px', // Add padding for better spacing
                          margin: 'auto', // Center dialog if needed
                        }
                      }}
                >
                    {/* Scrollable chat content */}
                    <Box
                        id="chat-container"
                        sx={{
                            flexGrow: 1,
                            overflowY: 'auto',
                            maxHeight: 'calc(100% - 100px)', // Adjust for input section
                            paddingRight: 2,
                            paddingBottom: 2,
                            borderBottom: '1px solid #ccc',
                        }}
                    >
                        {messages.map((message, index) => (
                            <Typography
                                key={index}
                                variant="body1"
                                sx={{
                                    whiteSpace: 'pre-wrap',
                                    textAlign: message.sender === 'user' ? 'right' : 'left',
                                    marginBottom: 1,
                                    color: message.sender === 'user' ? 'blue' : 'black',
                                }}
                            >
                                {message.text}
                            </Typography>
                        ))}

                        {loading && (
                            <Typography variant="body2" sx={{ textAlign: 'left', color: 'gray' }}>
                                Bot is typing...
                            </Typography>
                        )}
                    </Box>

                    {/* Input section */}
                    <Box sx={{ mt: 2, position: 'relative', bottom: 0, width: '100%' }}>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Your Query"
                            fullWidth
                            multiline
                            rows={2}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseChat}>Close</Button>
                    <Button onClick={handleSubmit} disabled={loading || !query}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </section>
    );
};

export default Home;
