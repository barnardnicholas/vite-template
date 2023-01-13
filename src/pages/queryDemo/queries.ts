import axios from '../../services/api';

export enum todoQueryKeys {
  TODOLIST = 'todoList',
}

export const fetchTodos = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/');
  return data;
};

export const fetchTodoQueryConfig = {
  queryKey: [todoQueryKeys.TODOLIST],
  queryFn: fetchTodos,
  // staleTime: 60000, // Don't refetch this query for 1 minute
  // cacheTime: 120000, // keep unused data in cache for 2 minutes, then delete
  // refetchInterval: 180000, // Refetch this data every 3 minutes while query is in use
};
