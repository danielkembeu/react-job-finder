import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';


import LandingPage from './pages/landing';
import Button from './lib/ui/button';
import AllJobsPage from './pages/all-jobs';
import SearchPage from './pages/search';
import AboutPage from './pages/about';

export default function Routing() {

  const router = useNavigate();

  const NotFoudComponent = () => (
    <div className='w-screen h-screen grid place-items-center'>
      <div className='flex flex-col gap-5 justify-center'>
        <h1 className='text-gray-600 font-bold text-2xl'>404 | Page Not Found</h1>
        <Button title='Go Back' onButtonClicked={() => router('/')} />
      </div>
    </div>
  )

  return (
    <Routes>
      <Route index path='/' element={<LandingPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/all-jobs' element={<AllJobsPage />} />

      {/* Error pages */}
      <Route path='*' element={<NotFoudComponent />} />
    </Routes>
  )
}
