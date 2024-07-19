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
import {helix} from 'ldrs';

helix.register ();



function App() {
axios.defaults.baseURL ='https://zaid-gmt-backend-4.vercel.app/';

  return (
    <>
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <l-helix size="45" speed="2.5" color="#FE8C00" />;
            </div>
            }><SplashScreen /></Suspense>}
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <l-helix size="45" speed="2.5" color="#FE8C00" />;
                </div>
              }><LoginSignUpForm /></Suspense>
            }
          />
          <Route
            path="/success"
            element={<Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <l-helix size="45" speed="2.5" color="#FE8C00" />;
              </div>
            }><SuccessLogin /></Suspense>}
          />
          <Route
            path="/tracking"
            element={<Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <l-helix size="45" speed="2.5" color="#FE8C00" />;
              </div>
            }><TrackingScreen /></Suspense>}
          />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
      

      
    </>
  )
}
export default App



