import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes } from 'react-router-dom';
import { Basket } from './pages/Basket';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { GamePage } from './pages/[id]';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path={`/game/:id`} element={<GamePage />}></Route>;
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
