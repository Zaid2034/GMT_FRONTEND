/* eslint-disable no-unused-vars */
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react'
import { UserContextProvider } from './UserContext';
const SplashScreen = React.lazy (() => import ('./pages/SplashScreen'));
const LoginSignUpForm  = React.lazy (() => import ('./pages/LoginSignUp'));
const SuccessLogin = React.lazy (() => import ('./pages/SuccessLogin'));
const TrackingScreen = React.lazy (() => import ('./pages/TrackingScreen'));
import axios from 'axios';


function App() {
axios.defaults.baseURL =
  'https://vercel-testing-hcpetjro7-zaids-projects-e530d5c7.vercel.app';

  return (
    <>
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Suspense fallback={'loading....'}><SplashScreen /></Suspense>}
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={'loading....'}><LoginSignUpForm /></Suspense>
            }
          />
          <Route
            path="/success"
            element={<Suspense fallback={'loading....'}><SuccessLogin /></Suspense>}
          />
          <Route
            path="/tracking"
            element={<Suspense fallback={'loading....'}><TrackingScreen /></Suspense>}
          />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
      

      
    </>
  )
}
export default App



