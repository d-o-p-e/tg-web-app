import React, { useState } from 'react';
import Providers from '@/components/react-query/Providers';
import MainPage from '@/pages/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
