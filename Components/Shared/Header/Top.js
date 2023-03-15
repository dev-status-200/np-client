import React from 'react';
import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { AiFillInstagram, AiFillLinkedin, AiOutlineUser } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { Row, Col } from 'react-bootstrap';
import Router from 'next/router';

const Top = () => {
  return (
    <div className='header-styles'>
      <Row className='grey1-bg px-4 py-2 '>
        <Col className=''>
          <span>
            <BiPhoneCall className='fs-20' />
          </span>
          <span className='fs-15 mx-1'>
            03332209125
          </span>
          <span className='fs-15 mx-0'>
            |
          </span>
          <span className='fs-15 mx-1'>
            03332209125
          </span>
          <span className='fs-15 mx-1'>
            |
          </span>
          <span>
            <BiMailSend className='fs-20' />
          </span>
          <span className='fs-15 mx-1'>
            info@nouvelliste.com.pk
          </span>
        </Col>
        <Col className='text-end'>
          <span>
            <FaFacebookSquare className='fs-18' />
          </span>
          <span>
            <AiFillInstagram className='fs-20 mx-1' />
          </span>
          <span>
            <AiFillLinkedin className='fs-20' />
          </span>
          <span className='fs-15 mx-2'>
            |
          </span>
          <span>
            <AiOutlineUser className='fs-16 mx-2 pr b2' />
          </span>
          <span className="cur" onClick={()=>Router.push("/login")}>
            Login
          </span>
        </Col>
      </Row>
    </div>
  )
}

export default Top
