import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './BookContainer.css'

const BookContainer = ({ product,handleBookmarkedNum,handleReadingTime}) => {
  const { name, title, time, img,icon } = product;
  const handleBookmarked = handleBookmarkedNum;
  const handleTime = handleReadingTime;
  return (
    <div className="mb-10">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={img} />
        </figure>
        <div className="card-body m-10">
          <div className="flex justify-between mb-5">
            <div className="flex items-center">
              <div className="me-6">
                <img className="w-16" src={icon} alt="" />
              </div>
              <div>
                <h3 className=" text-2xl font-bold">{name}</h3>
                <p className="text-base">Mar 14 (4 Days ago)</p>
              </div>
            </div>
            <div className="flex items-center">
                <p className="p-2 text-xl font-medium">{time} min read</p>
                <FontAwesomeIcon onClick={()=>handleBookmarked(product)} className="w-6 h-6" icon={faBookmark} />
            </div>
          </div>
          <h2 className="card-title text-4xl font-bold mb-4">{title}</h2>
          <p className="p-2 text-xl font-medium mb-5">#beginners <span className="ms-2 text-xl font-medium">#programming</span></p>
          <a onClick={()=>handleTime(time)} className="for-anchor " href="#">Marks as read</a>
        </div>
      </div>
    </div>
  );
};

export default BookContainer;
