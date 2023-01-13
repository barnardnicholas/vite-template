import React from 'react';
import { AppBar, Box, Button, CircularProgress, Divider, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import { useQueryClient } from '@tanstack/react-query';
import { todoQueryKeys } from '@pages/queryDemo/queries';
import { countAtom, localStorageAtom, sessionStorageAtom } from '@pages/jotaiDemo/atoms';

function Header() {
  const [a] = useAtom(countAtom);
  const [ls] = useAtom(localStorageAtom);
  const [ss] = useAtom(sessionStorageAtom);

  const queryClient = useQueryClient();

  return (
    <AppBar>
      <Box sx={{ p: 2, display: 'flex' }}>
        <Typography variant="h3">DEMO APP</Typography>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            onClick={() => queryClient.invalidateQueries({ queryKey: [todoQueryKeys.TODOLIST] })}
          >
            INVALIDATE TODO QUERY
          </Button>
          <Divider orientation="vertical" sx={{ marginLeft: 2, marginRight: 2 }} />
          <Box sx={{ p: 2 }}>Atom: {a}</Box>
          <Box sx={{ p: 2 }}>LS: {ls}</Box>
          <Box sx={{ p: 2 }}>SS: {ss}</Box>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Header;
