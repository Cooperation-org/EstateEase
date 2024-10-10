import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from '../assets/backgroundImage.png';

// Styled component for background image and layout
const BannerContainer = styled(Box)(({ theme }) => ({
  borderRadius: '30px',
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'flex-end', // Align content to the right
  alignItems: 'center',
  padding: theme.spacing(4),
  height: '250px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',

}));

// Styled component for the text area (right side)
const TextContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(68, 68, 68, 1)',
  color: '#fff',
  padding: theme.spacing(3),
  borderRadius: '15px',
  maxWidth: '500px',
  textAlign: 'left', // Ensures text stays aligned to the left
}));

const CallToActionBanner = () => {
  return (
    <BannerContainer>
      <TextContainer>
        <Typography variant="h4" gutterBottom>
          Join Our Agency Today!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Ready to take the next step in your career? Click the button below to become an agent and start making a difference with us.
        </Typography>
        <Button variant="outlined" color='inherit' size='large' sx={{ fontWeight: 'bold', fontSize: '16px', mt: 2 }}>
        Become an agent
        </Button>
      </TextContainer>
    </BannerContainer>
  );
};

export default CallToActionBanner;
