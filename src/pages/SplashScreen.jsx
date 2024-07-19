/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import images from '../assets/image39.png'
import images3 from '../assets/image 32.png'
import { useContext, useState,useEffect } from 'react'
import { CircularProgress } from '../components/CircularProgress'
import { UserContext } from '../UserContext'
import { useNavigate } from 'react-router-dom'
import {helix} from 'ldrs';

helix.register ();


const SplashScreen = () => {
    const [count,setCount]=useState(1)
    const {isLoggedIn, isLoading} = useContext (UserContext);

    const navigate=useNavigate()
    useEffect(()=>{
        if (isLoggedIn) {
            navigate ('/success');
        }
        return () => {
        };
    },[isLoggedIn])
    if(isLoading){
        console.log("Is loading is true")
        return (
            <div className="min-h-screen flex items-center justify-center">
                <l-helix size="45" speed="2.5" color="#FE8C00" />
            </div>
        )
    }
    return (
        <div className='flex justify-center h-screen bg-black'>
            <div className="relative flex items-end justify-center h-full w-[375px] bg-black">
                <div className="absolute inset-0 z-0">
                    <img
                    src={count==1? images:images3}
                    alt="Delicious Burger"
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 bg-primary-orange p-6 rounded-[48px] text-center w-[311px] h-[400px] mb-8 flex flex-col justify-between">
                    <div>
                        <h4 className="text-white text-3xl font-semibold mb-2">We serve incomparable delicacies</h4>
                        <p className="text-white mb-4 text-sm font-normal">All the best restaurants with their top menu waiting for you, they can't wait for your order!!</p>
                        <div className='flex justify-center gap-1'>
                            <div className={`w-[24px] h-[6px] rounded-[100px] ${count==1? 'bg-white' : 'bg-primary-slide'} `}></div>
                            <div className={`w-[24px] h-[6px] rounded-[100px] ${count==2? 'bg-white' : 'bg-primary-slide'} `}></div>
                            <div className={`w-[24px] h-[6px] rounded-[100px] ${count==3? 'bg-white' : 'bg-primary-slide'} `}></div>
                        </div>
                    </div>
                    {count<=2?(
                        <div className="flex justify-between text-white mx-2 font-semibold">
                    
                        <p className='cursor-pointer text-sm' onClick={()=>{
                            if(count>1){
                                setCount(count-1)
                            }
                        }}>Skip</p>
                        <div className='flex justify-center items-center gap-x-1'>
                            <p
                            className="cursor-pointer text-sm pb-0.5 font-semibold"
                            onClick={() => {
                                if (count < 3) {
                                setCount (count + 1);
                                }
                            }}
                            >
                            Next
                            </p>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L13.7071 14.7071C13.3166 15.0976 12.6834 15.0976 12.2929 14.7071C11.9024 14.3166 11.9024 13.6834 12.2929 13.2929L14.5858 11H3C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H14.5858L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z"
                                    fill="white"
                                />
                            </svg>


                        </div>
                        
                    </div>

                    ):(<div className='flex justify-center items-center mb-4 cursor-pointer'>
                        <CircularProgress/>
                    </div>)}
                    
                </div>
            </div>

        </div>
    )
}

export default SplashScreen