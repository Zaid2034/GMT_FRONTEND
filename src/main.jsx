/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {GoogleOAuthProvider} from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId='827461523674-pu06cbrfglhkihs67r11ublnmlh51anh.apps.googleusercontent.com'>
    <App />
  </GoogleOAuthProvider>   
  </React.StrictMode>,
)
