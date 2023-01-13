import React from 'react';
import { Alert, Box, CircularProgress, Divider, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchTodoQueryConfig, fetchTodos, todoQueryKeys } from './queries';
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
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">REACT-QUERY DEMO</Typography>
      <Divider sx={{ m: 2 }} />
      <Typography variant="h5">Todo List:</Typography>
      <TodoList />
    </Box>
  );
}

export default QueryDemo;
