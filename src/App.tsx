import { Suspense } from 'react';

import './_styles/main.scss';
import TestPage from '@pages/TestPage/TestPage';

function App() {
  return (
    <Suspense fallback={<></>}>
      <div className="App">
        <TestPage />
      </div>
    </Suspense>
  );
}

export default App;
