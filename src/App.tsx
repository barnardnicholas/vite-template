import { Suspense } from 'react';
import JotaiDemo from '@pages/jotaiDemo/JotaiDemo';
import Header from '@components/Header';
import QueryDemo from '@pages/queryDemo/QueryDemo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Divider } from '@mui/material';

const queryClient = new QueryClient();

function App() {
  return (
    <Suspense fallback={<></>}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Header />
          <JotaiDemo />
          <Divider />
          <QueryDemo />
          <Divider />
        </div>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
