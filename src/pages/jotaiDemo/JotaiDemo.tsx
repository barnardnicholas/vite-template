import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import { atom, useAtom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { countAtom, localStorageAtom, sessionStorageAtom } from './atoms';
import { buttonStyles, flexStyles } from './constants';

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

function JotaiDemo() {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Typography variant="h4">JOTAI DEMOS</Typography>
        <Divider sx={{ my: 2 }} />
        <AtomDemo />
        <LocalStorageAtomDemo />
        <SessionStorageAtomDemo />
      </Box>
    </>
  );
}

export default JotaiDemo;
