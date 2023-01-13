import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider as JotaiStoreProvider } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryClientAtom } from 'jotai/query';
import './index.css';
import { ThemeProvider } from './theme/ThemeProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <JotaiStoreProvider initialValues={[[queryClientAtom, queryClient]]}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </JotaiStoreProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
