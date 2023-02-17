import React from 'react';
import { Container, Typography } from '@mui/material';
import { loremIpsum } from './constants';

function TestPage() {
  return (
    <Container>
      <Typography variant="h1">Page</Typography>
      {loremIpsum.map((text: string) => (
        <Typography variant="body1" key={text.slice(0, 9)}>
          {text}
        </Typography>
      ))}
    </Container>
  );
}

export default TestPage;
