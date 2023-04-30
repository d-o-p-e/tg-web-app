import React, { useState } from 'react';
import Providers from '@/components/react-query/Providers';
import MainPage from '@/pages/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserPage from '@/pages/user';
import NavigationBar from './components/NavigationBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Providers>
      <BrowserRouter>
        <NavigationBar>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </NavigationBar>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
