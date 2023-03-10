import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Row, Col } from 'react-bootstrap';
import Link from "next/link";

export default function Desktop() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='hero1'>
            <Row>
                <Col md={2}></Col>
                <Col>
                    <div className="hero-layouts text-center white-txt">
                        <h1 className="fw-700 fs-50">JOURNEY TO <br/>EXPLORE THE WORLD</h1>
                        <p className="fs-12">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <Link href={"/home"} className="text-dec-none global-blue-btn">
                            CREATE YOUR OWN TRIP
                        </Link>
                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='hero2'>
        <Row>
            <Col md={2}></Col>
            <Col>
                <div className="hero-layouts text-center white-txt">
                    <h1 className="fw-700 fs-50">JOURNEY TO <br/>EXPLORE THE WORLD</h1>
                    <p className="fs-12">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <Link href={"/home"} className="text-dec-none global-blue-btn">
                        CREATE YOUR OWN TRIP
                    </Link>
                </div>
            </Col>
            <Col md={2}></Col>
        </Row>
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
