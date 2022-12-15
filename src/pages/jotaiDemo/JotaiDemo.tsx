import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { atom, useAtom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

const flexStyles = {
  display: 'flex',
  p: 1,
};

const buttonStyles = {
  mr: 1,
  border: '1px solid',
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const countAtom = atom<number>(0);

function AtomDemo() {
  const [count, setCount] = useAtom(countAtom);
  return (
    <Box sx={flexStyles}>
      <Button sx={buttonStyles} onClick={() => setCount(count + 1)}>
        INCREMENT
      </Button>
      <Typography>Count Atom: {count}</Typography>
    </Box>
  );
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const localStorageAtom = atomWithStorage<number>('localCount', 0);

function LocalStorageAtomDemo() {
  const [localCount, setLocalCount] = useAtom(localStorageAtom);
  return (
    <Box sx={flexStyles}>
      <Button sx={buttonStyles} onClick={() => setLocalCount(localCount + 1)}>
        INCREMENT
      </Button>
      <Typography>Local Storage Atom: {localCount}</Typography>
    </Box>
  );
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const sessionStorageAtom = atomWithStorage<number>(
  'sessionCount',
  0,
  createJSONStorage(() => window.sessionStorage),
);

function SessionStorageAtomDemo() {
  const [sessionCount, setSessionCount] = useAtom(sessionStorageAtom);
  return (
    <Box sx={flexStyles}>
      <Button sx={buttonStyles} onClick={() => setSessionCount(sessionCount + 1)}>
        INCREMENT
      </Button>
      <Typography>Session Storage Atom: {sessionCount}</Typography>
    </Box>
  );
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function JotaiDemo() {
  return (
    <>
      <Box sx={{ p: 2, mt: 12 }}>
        <Typography variant="h4">JOTAI DEMOS</Typography>
        <AtomDemo />
        <LocalStorageAtomDemo />
        <SessionStorageAtomDemo />
      </Box>
    </>
  );
}

export default JotaiDemo;
