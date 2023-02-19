import React from 'react';
import {
  Box,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { cards, loremIpsum } from './constants';

function TestPage() {
  return (
    <Container>
      <Typography variant="h1">H1 Title</Typography>
      {loremIpsum.map((text: string) => (
        <Typography variant="body1" key={text.slice(0, 9)}>
          {text}
        </Typography>
      ))}
      <Box sx={{ mb: 3 }}>
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
      <Box sx={{ mb: 3 }}>
        <Grid container spacing={2}>
          {cards.map((card: Record<string, string>, i: number) => (
            <Grid key={`${card.title}-${i}`} item xs={12} sm={6} md={4}>
              <Card variant="outlined" elevation={1}>
                <Typography variant="h3" sx={{ mb: 0 }}>
                  {card.title}
                </Typography>
                <Typography variant="body1">{card.subtitle}</Typography>
                <Typography variant="body1">{card.excerpt}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <Typography variant="h2">Form</Typography>
        <Box>
          <FormGroup sx={{ marginBottom: '1rem' }}>
            <FormControl required>
              <TextField autoFocus placeholder="Enter text here" />
            </FormControl>
          </FormGroup>
          <FormGroup sx={{ marginBottom: '1rem' }}>
            <FormControl required>
              <TextField multiline rows={3} placeholder="Enter multi-line text here" />
            </FormControl>
          </FormGroup>
          <FormGroup sx={{ marginBottom: '1rem' }}>
            <FormControl variant="standard">
              <Select
                value={''}
                onChange={(e: SelectChangeEvent) => console.log(e.target.value)}
                label="Select"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </FormGroup>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  icon={<BookmarkBorderIcon />}
                  checkedIcon={<BookmarkIcon />}
                />
              }
              label={
                <Typography variant="body1" sx={{ mb: 0 }}>
                  Checkbox 1
                </Typography>
              }
              labelPlacement="end"
              sx={{ mb: 0 }}
            />
            <FormControlLabel
              control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
              label={
                <Typography variant="body1" sx={{ mb: 0 }}>
                  Checkbox 2
                </Typography>
              }
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
              label={
                <Typography variant="body1" sx={{ mb: 0 }}>
                  Checkbox 3
                </Typography>
              }
              labelPlacement="end"
            />
          </FormGroup>
          <FormGroup row>
            <FormControlLabel
              control={<Switch />}
              label={
                <Typography variant="body1" sx={{ mb: 0 }}>
                  Switch 1
                </Typography>
              }
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Switch />}
              label={
                <Typography variant="body1" sx={{ mb: 0 }}>
                  Switch 2
                </Typography>
              }
              labelPlacement="end"
            />
            <FormControlLabel
              control={<Switch />}
              label={
                <Typography variant="body1" sx={{ mb: 0 }}>
                  Switch 3
                </Typography>
              }
              labelPlacement="end"
            />
          </FormGroup>
          <Box sx={{ mb: 3 }}>
            <Button
              sx={{ mr: 3 }}
              color="primary"
              onClick={() => console.log(`Clicked Primary Button`)}
            >
              Button
            </Button>
            <Button
              sx={{ mr: 3 }}
              color="secondary"
              variant="outlined"
              onClick={() => console.log(`Clicked Secondary Button`)}
            >
              Outlined Button
            </Button>
            <Button
              sx={{ mr: 3 }}
              color="primary"
              variant="text"
              onClick={() => console.log(`Clicked Text Button`)}
            >
              Text Button
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default TestPage;
