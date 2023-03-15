import React, { useState, useEffect } from 'react';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import Router from 'next/router'
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode'

const Login = ({sessionData}) => {

    useEffect(() => {
        if(sessionData.isLoggedIn==true){
          Router.push('/portal/dashboard')
        }
      }, [sessionData]);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [reveal, setReveal] = useState(false);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault(e);
        setLoad(true)
        axios.post(process.env.NEXT_PUBLIC_AUTH_LOGIN,{
          email:username,
          password:password
        }).then((x)=>{
            console.log(x.data)
          if(x.data.message=='Success'){
            let token = jwt_decode(x.data.token);
            Cookies.set('token', x.data.token, { expires: 1 });
            Cookies.set('username', token.username, { expires: 1 });
            Cookies.set('loginId', token.loginId, { expires: 1 });
            Router.push('/portal/dashboard')
          }else if(x.data.message=='Invalid'){
            setLoad(false);
            setError(true);
          }
        })
    }

  return (
    <div className='login-styles '>
      <div className='bg-signin'>
        <Row className='my-5 py-5'>
          <Col md={6} className='p-5'>
          <img src={'/img/crm-logo.png'} className='my-5' height={500} />
          <h2 style={{color:'white', marginLeft:120, fontWeight:'700'}}>Nouvelliste Pakistan CRM</h2>
          </Col>
          <Col md={6} className='p-5'>
          <form onSubmit={handleSubmit}>
          <div style={{ textAlign:'center'}}>
              <div className='fs-65 fw-800' style={{marginBottom:'25px'}}>LOGIN</div>
              {error&&<Alert style={{marginLeft:'20%', marginRight:'20%'}} key={'danger'} variant={'danger'}>
                Wrong username or password
              </Alert>}
              <div className='mb-4'>
                  <input className='login-inp' required placeholder='Enter your username...' value={username} onChange={(e)=>setUsername(e.target.value)} />
                  <img src={'/img/username.png'} className='username-img' height={55} />
              </div>
              <div className='mt-4'>
                  <input className='login-inp' placeholder='Enter your password...' required type={reveal?'text':'password'} value={password} onChange={(e)=>setPassword(e.target.value)} />
                  <img  src={reveal?'/img/pass.png':'/img/locked.png'} className='username-img' style={{cursor:'pointer'}} height={55} 
                    onClick={()=>setReveal(!reveal)} 
                  />
              </div>
              <div className='my-5'>
                  <button type='submit' className='login-btn'>{load?<Spinner animation="border" className='mx-3' size='sm' variant="light" />:'LOGIN'}</button>
              </div>
          </div>
          </form>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Login