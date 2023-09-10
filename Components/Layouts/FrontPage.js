import React, { useEffect } from 'react';
import Loader from '@/Components/Shared/Loader';
import Router from 'next/router';
import { delay } from '@/functions/delay';

const FrontPage = () => {
  
  useEffect(() => {
    const timerFunc = async() => {
        await delay(2000);
        Router.push("/home")        
    };
    timerFunc();
  }, [])
    
  return <Loader/>
}

export default FrontPage