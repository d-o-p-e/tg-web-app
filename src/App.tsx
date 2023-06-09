import React, { useState } from 'react';
import Providers from '@/components/react-query/Providers';
import MainPage from '@/pages/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserPage from '@/pages/user';
import NavigationBar from './components/NavigationBar';
import KakaoRedirectPage from './pages/redirect/KakaoRedirectPage';
import CampaignPage from './pages/campaign';

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <NavigationBar>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/user/:id" element={<UserPage />} />
            <Route path="/campaign" element={<CampaignPage />} />
            <Route path="/oauth/kakao" element={<KakaoRedirectPage />} />
          </Routes>
        </NavigationBar>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
