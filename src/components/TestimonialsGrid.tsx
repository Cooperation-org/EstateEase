import React from 'react';
import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/system';

// Example avatar image link (can replace with dynamic URLs)
const avatarImage = 'https://i.pravatar.cc/150?img=3';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Anonymous',
    title: 'MD, Smith Inc.',
    testimonial:
      'Selling a house can be stressful, but our agent made it so much easier. They provided great advice on staging our home and priced it right. We received multiple offers above asking price within a week.',
    avatar: avatarImage,
  },
  // Repeat testimonials for the example
  {
    id: 2,
    name: 'Dr. Anonymous',
    title: 'MD, Smith Inc.',
    testimonial:
      'Selling a house can be stressful, but our agent made it so much easier. They provided great advice on staging our home and priced it right. We received multiple offers above asking price within a week.',
    avatar: avatarImage,
  },
  {
    id: 3,
    name: 'Dr. Anonymous',
    title: 'MD, Smith Inc.',
    testimonial:
      'Selling a house can be stressful, but our agent made it so much easier. They provided great advice on staging our home and priced it right. We received multiple offers above asking price within a week.',
    avatar: avatarImage,
  },
  {
    id: 3,
    name: 'Dr. Anonymous',
    title: 'MD, Smith Inc.',
    testimonial:
      'Selling a house can be stressful, but our agent made it so much easier. They provided great advice on staging our home and priced it right. We received multiple offers above asking price within a week.',
    avatar: avatarImage,
  },
  {
    id: 3,
    name: 'Dr. Anonymous',
    title: 'MD, Smith Inc.',
    testimonial:
      'Selling a house can be stressful, but our agent made it so much easier. They provided great advice on staging our home and priced it right. We received multiple offers above asking price within a week.',
    avatar: avatarImage,
  },
];

// Styled component for hover effect on cards
const StyledCard = styled(Card)((() => ({
  borderRadius: '30px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)',
  },
  width: '372px',
  height: '293px',
  marginRight: '16px', // Add margin for spacing between cards
})));

const TestimonialsGrid = () => {
  return (
    <Box sx={{ padding: '2rem', maxWidth: '100%', margin: '50px auto', overflowX: 'auto' }}>
      <Typography variant="h4" align="left" gutterBottom>
        What Some of Our Satisfied Customers Say
      </Typography>
      <Typography variant="body1" align="left" color="textSecondary" gutterBottom mb={5} mt={1}>
        We pride ourselves on delivering exceptional service to every client. Read their stories to see their journey with us.
      </Typography>

      {/* Horizontal scrolling container */}
      <Box
        sx={{
          display: 'inline-flex',
          flexDirection: 'row',
          gap: '0',
          overflowX: 'auto',
          paddingBottom: '16px', // Add some space below to avoid card cut-off
        }}
      >
        {testimonials.map((testimonial) => (
          <StyledCard key={testimonial.id}>
            <CardContent>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                "{testimonial.testimonial}"
              </Typography>

              <Box display="flex" alignItems="center" marginTop="1rem">
                <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ marginRight: '1rem' }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {testimonial.title}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </StyledCard>
        ))}
      </Box>
      <Box
        sx={{
          display: 'inline-flex',
          flexDirection: 'row',
          gap: '0',
          overflowX: 'auto',
          paddingBottom: '16px', // Add some space below to avoid card cut-off
        }}
      >
        {testimonials.map((testimonial) => (
          <StyledCard key={testimonial.id}>
            <CardContent>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                "{testimonial.testimonial}"
              </Typography>

              <Box display="flex" alignItems="center" marginTop="1rem">
                <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ marginRight: '1rem' }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {testimonial.title}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </StyledCard>
        ))}
      </Box>
    </Box>
  );
};

export default TestimonialsGrid;
