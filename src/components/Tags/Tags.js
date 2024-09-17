import React from 'react';
import { Chip, Box } from '@mui/material';

const Tags = (props) => {
  const { tags, id } = props || {};

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        justifyContent: {
          xs: 'space-around', // For mobile view
          sm: 'flex-start' // For larger screens
        },
        alignItems: 'center',
      }}
    >
      {tags && tags.map((tag, index) => (
        <Chip
          key={id + index}
          label={tag}
          color="default"
          size="small"
          sx={{
            fontSize: '12px',
            padding: '4px 8px',
            margin: '2px', // Adjust margin to ensure spacing between tags
            letterSpacing: '0.5px',
            fontWeight: 'lighter',
            backgroundColor: '#f5f5f5', // Light background color for tags
            border: '1px solid #ccc', // Subtle border
            '&:hover': {
              backgroundColor: '#e0e0e0', // Slightly darker on hover
              borderColor: '#bbb', // Darker border on hover
              cursor: 'pointer',
              transform: 'scale(1.05)', // Slightly enlarge on hover
              transition: 'all 0.3s ease', // Smooth transition
            }
          }}
        />
      ))}
    </Box>
  );
};

export default Tags;
