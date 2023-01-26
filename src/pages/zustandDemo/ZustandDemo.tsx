import React from 'react';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { BearState, useBearStore, usePersistedBearStore } from './store';
import { buttonStyles, flexStyles } from '../../constants/constants';

function BearsDemo() {
  const { bears, increaseBy, add1Bear, killEveryBear } = useBearStore((state: BearState) => ({
    bears: state.bears,
    increaseBy: state.increaseBy,
    add1Bear: state.add1Bear,
    killEveryBear: state.killEveryBear,
  }));

  return (
    <Box sx={flexStyles}>
      <Stack>
        <Typography>Number of bears: {bears}</Typography>
        <Button sx={buttonStyles} onClick={add1Bear}>
          ADD 1 BEAR
        </Button>
        <Button sx={buttonStyles} onClick={() => increaseBy(15)}>
          ADD 15 BEARS
        </Button>
        <Button color="error" sx={buttonStyles} onClick={killEveryBear}>
          KILL EVERY SINGLE BEAR ☹️
        </Button>
      </Stack>
    </Box>
  );
}

function PersistedBearsDemo() {
  const { bears, increaseBy, add1Bear, killEveryBear } = usePersistedBearStore(
    (state: BearState) => ({
      bears: state.bears,
      increaseBy: state.increaseBy,
      add1Bear: state.add1Bear,
      killEveryBear: state.killEveryBear,
    }),
  );

  return (
    <Box sx={flexStyles}>
      <Stack>
        <Typography>Number of bears: {bears}</Typography>
        <Button sx={buttonStyles} onClick={add1Bear}>
          ADD 1 BEAR
        </Button>
        <Button sx={buttonStyles} onClick={() => increaseBy(15)}>
          ADD 15 BEARS
        </Button>
        <Button color="error" sx={buttonStyles} onClick={killEveryBear}>
          KILL EVERY SINGLE BEAR ☹️
        </Button>
      </Stack>
    </Box>
  );
}

function ZustandDemo() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">ZUSTAND DEMOS</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h5">NORMAL</Typography>
      <BearsDemo />
      <Divider sx={{ my: 2 }} />
      <Typography variant="h5">PERSISTED</Typography>
      <PersistedBearsDemo />
    </Box>
  );
}

export default ZustandDemo;
