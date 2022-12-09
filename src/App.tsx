import { Suspense } from 'react';
import { Typography } from '@mui/material';
import DemoPage from '@pages/demo/DemoPage';

function App() {
  return (
    <Suspense fallback={<></>}>
      <div className="App">
        <DemoPage />
      </div>
    </Suspense>
  );
}

export default App;
