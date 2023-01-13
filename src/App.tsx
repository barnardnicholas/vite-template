import { Suspense, SyntheticEvent, useState } from 'react';
import JotaiDemo from '@pages/jotaiDemo/JotaiDemo';
import Header from '@components/Header';
import QueryDemo from '@pages/queryDemo/QueryDemo';
import { atom, useAtom } from 'jotai';
import { Box, Tab, Tabs } from '@mui/material';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

export enum mainTabs {
  JOTAI = 0,
  REACTQUERY = 1,
}

export const activeTabAtom = atomWithStorage<mainTabs>(
  'activeTab',
  mainTabs.JOTAI,
  createJSONStorage(() => window.sessionStorage),
);

function App() {
  const [activeTab, setActiveTab] = useAtom(activeTabAtom);
  return (
    <Suspense fallback={<></>}>
      <div className="App">
        <Header />
        <Box sx={{ mt: 12 }} />
        <Tabs
          value={activeTab}
          onChange={(e: SyntheticEvent, value: mainTabs) => setActiveTab(value)}
        >
          <Tab label="JOTAI" />
          <Tab label="REACT-QUERY" />
        </Tabs>
        {activeTab === mainTabs.JOTAI && <JotaiDemo />}
        {activeTab === mainTabs.REACTQUERY && <QueryDemo />}
      </div>
    </Suspense>
  );
}

export default App;
