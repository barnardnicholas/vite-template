import React, { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchTodoQueryConfig, todoQueryKeys } from './queries';
import { Todo } from './types';

function TodoList() {
  const { isLoading, isFetching, error, data, isSuccess } = useQuery(fetchTodoQueryConfig);

  if (error) return <Alert severity="error">Error fetching data</Alert>;
  if (isLoading || isFetching)
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  return isSuccess ? (
    <Stack>
      {data?.slice(0, 9).map((todo: Todo) => (
        <Box key={todo.id}>{todo.title}</Box>
      ))}
    </Stack>
  ) : null;
}

function QueryDemo() {
  const queryClient = useQueryClient();
  const [showCachedData, setShowCachedData] = useState<boolean>(false);

  const cachedData = queryClient.getQueryData([todoQueryKeys.TODOLIST]);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">REACT-QUERY DEMO</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h5">Todo List:</Typography>
      <TodoList />
      <Divider sx={{ my: 2 }} />
      <Typography variant="h4">CACHED DATA</Typography>
      <Divider sx={{ my: 2 }} />
      <Button onClick={() => setShowCachedData(!showCachedData)}>SHOW DATA</Button>
      {showCachedData && JSON.stringify(cachedData)}
    </Box>
  );
}

export default QueryDemo;
