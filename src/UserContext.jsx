/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {createContext, useState, useEffect} from 'react';
import axios from 'axios';
export const UserContext = createContext ({});

export function UserContextProvider({children}) {
  const [email, setEmail] = useState (null);
  const [isLoggedIn,setisLoggedIn]=useState(false)
  console.log('In user context Provider')
  const token = localStorage.getItem ('token');
  useEffect(()=>{
    if (token && token != 'LoggedInWithGoogle') {
        const res = axios
          .get ('/success', {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem ('token'),
            },
          })
          .then (res => {
            if (res.data.message === 'OK') {
              setisLoggedIn (true);
             
            }
          });
      } else if (token === 'LoggedInWithGoogle') {
        console.log ('In if');
        setisLoggedIn (true);
      }
    },[isLoggedIn])

  
  return (
    <UserContext.Provider value={{email, setEmail,isLoggedIn,setisLoggedIn}}>
      {children}
    </UserContext.Provider>
  );
}
