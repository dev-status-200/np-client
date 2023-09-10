import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { StarOutlined } from "@ant-design/icons";
import { AiFillStar } from 'react-icons/ai'

export default function App() {

    const tours = [
        { id:1, name:"Valley Of Kashmir", country:"", image:"/img/mocktour.png", city:"Kashmir", desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry, typesetting industry." },
        { id:2, name:"Valley Of Sawat", country:"", image:"/img/mocktour.png", city:"Kashmir", desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry, typesetting industry." },
        { id:4, name:"Gorakh Hills", country:"", image:"/img/mocktour.png", city:"Kashmir", desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry, typesetting industry." },
        { id:2, name:"Karli Jheel", country:"", image:"/img/mocktour.png", city:"Kashmir", desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry, typesetting industry." },
        { id:5, name:"Valley Of Kashmir", country:"", image:"/img/mocktour.png", city:"Kashmir", desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry, typesetting industry." }
    ];
    const Card = ({data}) => {
        return(
        <div>                
            <img src={data.image} height={100} className="tour-img" />
            <div className="desc fs-12 text-start">
                <div className="rating px-2 py-1">
                <AiFillStar className="mx-1 fs-15 white-txt" />
                <AiFillStar className="mx-1 fs-15 white-txt" />
                <AiFillStar className="mx-1 fs-15 white-txt" />
                <AiFillStar className="mx-1 fs-15 white-txt" />
                <AiFillStar className="mx-1 fs-15 white-txt" />
                </div>
                <div className="blue-txt fw-500 fs-15">{data.city.toUpperCase()}</div>
                <h5 className="fw-500">{data.name.toUpperCase()}</h5>
                {data.desc}
            </div>
        </div>
        )
    }

  return (
    <div className="pt-5 px-5">
        <div className="py-5 text-center">
            <div className="blue-txt fw-500 tag fs-25" >FEATURED</div>
            <h1 className="fw-700 fs-45 jet-black-txt">MOST POPULAR TRIPS</h1>
            <p className="jet-black-txt fs-15 px-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry, typesetting industry, loremimply dummy trimming the printing and industry, typesetting industry.
            </p>
        </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination, Autoplay]}
        pagination={false}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        className=""
      > 
        {tours.map((x)=>{
            return(
                <SwiperSlide key={x.id}>
                    <Card data={x} />
                </SwiperSlide>
            )
        })}
      </Swiper>
         <div className="text-center" style={{position:'relative', position:'relative', bottom:120, zIndex:1}}>
          <button className="global-blue-btn px-5">VIEW MORE</button>
         </div>
    </div>
  );
}