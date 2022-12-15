import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from '../../services/api';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export enum todoQueryKeys {
  TODOLIST = 'TODOLIST',
}

export const fetchTodos = () => async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/');
  return data;
};

function TodoList() {
  const { isLoading, error, data, isSuccess } = useQuery({
    queryKey: [todoQueryKeys.TODOLIST],
    queryFn: fetchTodos(),
  });

  if (error) return <Box>Error</Box>;
  if (isLoading) return <Typography>Loading...</Typography>;
  return isSuccess ? (
    <Stack>
      {data?.map((todo: Todo) => (
        <Box key={todo.id}>{todo.title}</Box>
      ))}
    </Stack>
  ) : null;
}

function QueryDemo() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">QUERY DEMO</Typography>
      <Typography variant="h5">Todo List:</Typography>
      <TodoList />
    </Box>
  );
}

export default QueryDemo;
