import React,{ useState } from 'react';
import Header from '@/Components/Shared/Header/';
import '@/styles/globals.css';
import '@/styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router, { useRouter } from 'next/router';
import PortalLayout from '@/Components/Shared/PortalLayout';
import Loader from '@/Components/Shared/Loader';

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  Router.events.on("routeChangeStart", () => { setLoading(true) });
  Router.events.on("routeChangeComplete", () => { setLoading(false)});  

  return (
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
    { (router.pathname =='/login'||router.pathname =='/') && <Component {...pageProps} /> }
  </>
)}