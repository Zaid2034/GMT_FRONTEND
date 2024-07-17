/* eslint-disable no-unused-vars */
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const CircularProgress = () => {
  const [percentage, setPercentage] = useState(0);
  const navigate=useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        if(prevPercentage>=100){
          navigate('/register')
        }
        else{
          const newPercentage = prevPercentage >= 100 ? 0 : prevPercentage + 1;
          return newPercentage;
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);
  const strokeWidth = 2;

  return (
    <div style={{ width: 96, height: 96 }}>
      <CircularProgressbarWithChildren
        value={percentage}
        styles={buildStyles({
          // strokeLinecap: 'butt',
          // pathTransitionDuration: 0.3,
          pathTransition: 'none',
          pathColor: '#FFFFFF',
          trailColor: '#FFA500',
          
        })}
        strokeWidth={strokeWidth}
      >
        <div className='w-[62px] h-[62px] rounded-full bg-white flex justify-center items-center' onClick={()=>{navigate('/register')}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.99997 11.7257C3.99997 11.346 4.28212 11.0322 4.6482 10.9825L4.74997 10.9757L17.934 10.9763L13.171 6.23273C12.8775 5.94047 12.8764 5.4656 13.1687 5.17207C13.4344 4.90523 13.851 4.88013 14.1451 5.09735L14.2294 5.16979L20.2794 11.1938C20.318 11.2323 20.3517 11.274 20.3802 11.318C20.3882 11.3313 20.3964 11.3448 20.4042 11.3587C20.4114 11.3705 20.4178 11.3828 20.4239 11.3953C20.4324 11.4134 20.4407 11.4321 20.4482 11.4512C20.4543 11.4659 20.4594 11.4802 20.464 11.4947C20.4695 11.5126 20.4749 11.5316 20.4795 11.551C20.483 11.5645 20.4857 11.5775 20.488 11.5906C20.4914 11.61 20.4942 11.6301 20.4962 11.6505C20.498 11.666 20.499 11.6814 20.4996 11.6967C20.4998 11.7061 20.5 11.7158 20.5 11.7257L20.4996 11.7547C20.499 11.7694 20.498 11.7841 20.4966 11.7988L20.5 11.7257C20.5 11.773 20.4956 11.8193 20.4872 11.8642C20.4853 11.8749 20.4829 11.8859 20.4804 11.8969C20.475 11.9195 20.4689 11.9412 20.4618 11.9625C20.4583 11.9731 20.4543 11.9844 20.4499 11.9957C20.4412 12.0182 20.4316 12.0397 20.4212 12.0607C20.4163 12.0705 20.4108 12.0809 20.4051 12.0911C20.3958 12.1077 20.3861 12.1236 20.3759 12.139C20.3687 12.1499 20.3607 12.1613 20.3524 12.1725L20.3459 12.1811C20.3257 12.2075 20.3038 12.2325 20.2803 12.256L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.461 18.573 13.1687 18.2795C12.903 18.0127 12.8797 17.596 13.0981 17.3028L13.1709 17.2188L17.932 12.4763L4.74997 12.4757C4.33576 12.4757 3.99997 12.1399 3.99997 11.7257Z" fill="#FE8C00"/>
            </svg>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};
