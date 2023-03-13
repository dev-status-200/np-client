import Header from '@/Components/Shared/Header/'
import '@/styles/globals.css'
import '@/styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
        <div className='text-center' style={{marginTop:"25%"}}> Unexpected Server Error Occured </div>
//     <>
//       <Header/>
//       <Component {...pageProps} />
//     </>
  )
}
