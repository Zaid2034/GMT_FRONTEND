/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import images from '../assets/image39.png'
import images2 from '../assets/image 7.png'
import images3 from '../assets/image 32.png'
import { useContext, useState,useEffect } from 'react'
import {Circle} from 'rc-progress'
import { CircularProgress } from '../components/CircularProgress'
import { UserContext } from '../UserContext'
import { useNavigate } from 'react-router-dom'

const SplashScreen = () => {
    const [count,setCount]=useState(1)
    const {isLoggedIn}=useContext(UserContext)
    const navigate=useNavigate()
    useEffect(()=>{
        if (isLoggedIn) {
            navigate ('/success');
        }
        return () => {
            // Cleanup code here
        };
    },[isLoggedIn])
    
    return (
        <div className='flex justify-center bg-black'>
            <div className="relative flex items-end justify-center h-screen w-[375px] bg-black">
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
                        <div className="flex justify-between text-white">
                    
                        <p className='cursor-pointer' onClick={()=>{
                            if(count>1){
                                setCount(count-1)
                            }
                        }}>Skip</p>
                        <p className='cursor-pointer' onClick={()=>{
                            if(count<3){
                                setCount(count+1)}
                            }
                        }>Next</p>
                    </div>

                    ):(<div className='flex justify-center items-center mb-4'>
                        <CircularProgress/>
                    </div>)}
                    
                </div>
            </div>

        </div>
    )
}

export default SplashScreen