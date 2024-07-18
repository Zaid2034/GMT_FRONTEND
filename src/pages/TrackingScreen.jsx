/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import AnalogClock from '../components/AnalogClock'
import { UserContext } from '../UserContext'
import { useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'
const TrackingScreen =() => {
  const location=useLocation()
  const navigate=useNavigate()
  const {isLoggedIn}=useContext(UserContext)
  const [isSharable,setIsSharable]=useState(false)
  const params=new URLSearchParams (location.search);
  const slider=params.get('sliderValue')
  const token=params.get('token')

  try{
    const res = axios
    .get ('/getToken', {
      headers: {
        token: token,
      },
    })
    .then (res => {
      console.log ('message:', res.data.message);
      if (res.data.message == 'OK') {
        setIsSharable (true);
      }
    });
  }catch(err){
    alert (`${err} ${err.response.data.message}`);
  }
  
  useEffect(()=>{
    console.log("In tracking useEffect")
    if(!isLoggedIn && slider==null && token==null){
      console.log("In tracking if")
      navigate('/register')
    }
    return ()=>{
    }
  },[isLoggedIn])
  return (
      <>
        {(isLoggedIn && slider==null && token==null) || (isSharable) ? (
          <AnalogClock />
        ):(
          <div>
            Page does not exist
          </div>
        )}
        
      </>
  )
}
export default TrackingScreen
