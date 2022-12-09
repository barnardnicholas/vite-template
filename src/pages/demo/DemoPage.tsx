import React from 'react';
import { Box, FormControlLabel, FormGroup, FormLabel, TextField, Typography } from '@mui/material';

function DemoPage() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h1">H1 Title</Typography>
      <Typography variant="h2">H2 Title</Typography>
      <Typography variant="h3">H3 Title</Typography>
      <Typography variant="h4">H4 Title</Typography>
      <Typography variant="h5">H5 Title</Typography>
      <Typography variant="h6">H6 Title</Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
      <Typography variant="h2">Inputs</Typography>
      <FormGroup>
        <FormLabel>
          <TextField
            required
            label="Text field"
            helperText="Helper Text"
            value={''}
            onChange={() => {}}
          />
        </FormLabel>
        <FormLabel>
          <TextField
            type="number"
            required
            label="Text field"
            helperText="Helper Text"
            value={0}
            onChange={() => {}}
          />
        </FormLabel>
      </FormGroup>
    </Box>
  );
}

export default DemoPage;
