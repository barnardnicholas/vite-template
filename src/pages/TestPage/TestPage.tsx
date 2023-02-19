import React from 'react';
import { Box, Chip, Container, Typography } from '@mui/material';
import { loremIpsum } from './constants';

function TestPage() {
  return (
    <Container>
      <Typography variant="h1">H1 Title</Typography>
      {loremIpsum.map((text: string) => (
        <Typography variant="body1" key={text.slice(0, 9)}>
          {text}
        </Typography>
      ))}
      <Box>
        {['Chip', 'Chip', 'Chip', 'Chip'].map((label: string, i: number) => (
          <Chip
            key={`${label}-${i}`}
            label="Chip"
            clickable
            onDelete={() => console.log(`Delete ${label}`)}
            sx={{ mr: 1 }}
            onClick={() => console.log(`Click ${label}`)}
          />
        ))}
      </Box>
    </Container>
  );
}

export default TestPage;
