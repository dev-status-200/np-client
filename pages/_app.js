import React,{ useState, useEffect } from 'react';
import Header from '@/Components/Shared/Header/'
import '@/styles/globals.css'
import '@/styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router, { useRouter } from 'next/router';
import PortalLayout from '@/Components/Shared/PortalLayout';

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname)
  }, [])

  return (
        // <div className='text-center' style={{marginTop:"25%"}}> Unexpected Server Error Occured </div>
    <>
      { router.pathname =='/home' &&
        <>
          <Header/>
          <Component {...pageProps} />
        </>
      }
      { (
        router.pathname =='/portal/dashboard' ||
        router.pathname =='/portal/tourCreation' 
      ) &&
        <PortalLayout>
          { loading && <Loader/> }
          { !loading && <Component {...pageProps} /> }
        </PortalLayout>
      }
      { router.pathname =='/login' &&
        <Component {...pageProps} />
      }
    </>
  )
}
