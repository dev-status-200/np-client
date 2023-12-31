import React from 'react';
import { AiFillStar } from 'react-icons/ai'

const TripCardMedium = ({data}) => {
    return(
    <div>                
      <img src={data.main_image} className="tour-img" />
      <div className="desc fs-12 text-start">
        <div className="rating px-2 py-1">
          <AiFillStar className="mx-1 fs-15 white-txt" />
          <AiFillStar className="mx-1 fs-15 white-txt" />
          <AiFillStar className="mx-1 fs-15 white-txt" />
          <AiFillStar className="mx-1 fs-15 white-txt" />
          <AiFillStar className="mx-1 fs-15 white-txt" />
        </div>
        <div className="blue-txt fw-500 fs-15">{data.city.toUpperCase()}</div>
        <h5 className="fw-500">{data.title.toUpperCase()}</h5>
        {data.tour_detail}
      </div>
    </div>
    )
  }

export default React.memo(TripCardMedium)
