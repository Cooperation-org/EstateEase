import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        padding: '20px 0',
        textAlign: 'center',
        marginTop: 'auto', // To ensure it's at the bottom of the page
      }}
    >
      <Typography variant="body2" color="textSecondary">
        <Link
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener"
          underline="hover"
          sx={{ color: 'green', fontWeight: 'bold' }} // Green color for the link
        >
          View project on GitHub
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
