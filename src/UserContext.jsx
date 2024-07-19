/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {createContext, useState, useEffect} from 'react';
import axios from 'axios';
export const UserContext = createContext ({});

export function UserContextProvider({children}) {
  const [isLoggedIn,setisLoggedIn]=useState(false)
  const [isLoading, setIsLoading] = useState (false);
  const token = localStorage.getItem ('token');
  useEffect(()=>{
    console.log('In user context use Effect')
    if (token && token != 'LoggedInWithGoogle') {
        try{
          setIsLoading (true);
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
        }catch(err){
          setIsLoading(false)
          alert (`${err} ${err.response.data.message}`);

        }
      } else if (token === 'LoggedInWithGoogle') {
        setIsLoading(true)
        setisLoggedIn (true);
      }else{
        setIsLoading(false)
      }
    },[isLoggedIn])

  
  return (
    <UserContext.Provider value={{isLoggedIn,setisLoggedIn,isLoading,setIsLoading}}>
      {children}
    </UserContext.Provider>
  );
}
