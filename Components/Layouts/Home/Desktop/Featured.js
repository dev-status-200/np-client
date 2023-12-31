import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import TripCardMedium from "@/Components/Shared/TripCardMedium";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { delay } from "@/functions/delay";

export default function App() {

  useEffect(()=>{
    getTourData();
  }, []);
  const [popularTrips, setPopularTrips] = useState([])

  const getTourData = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/packages/mostPopulartrips`)
    .then(async(x)=>{
      await delay(3000)
      setPopularTrips(x.data.result)
    })
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
    {popularTrips.length>0 &&
    <>
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
      {popularTrips.map((x)=>{
        return(
          <SwiperSlide key={x.id}>
            <TripCardMedium data={x} />
          </SwiperSlide>
      )})}
    </Swiper>
    <div className="text-center" style={{position:'relative', position:'relative', bottom:120, zIndex:1}}>
      <button className="global-blue-btn px-5">VIEW MORE</button>
    </div>
    </>}
    {popularTrips.length==0 && <div className="text-center mb-5">
      <Spinner  animation="border" variant="info"  />
      <p>Loading Trips</p>
    </div>}
  </div>
  );
}