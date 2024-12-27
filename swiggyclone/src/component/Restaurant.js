import React from "react";

const Restaurant = ({ resp }) => {
  const {name,cloudinaryImageId,avgRating,locality,areaName} = resp
  return (
    <div >
      <div className='card cursor-pointer'>
          <div>
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                cloudinaryImageId
              }
              className='rounded-xl w-full h-[200px] object-cover'
            />
          </div>
          <div className='pl-2'>
            <p className='pt-2'> {name} </p>
            <div className='flex gap-2'>
              <p>
                <span>★</span> {avgRating}{" "}
              </p>{" "}
              • <p>{resp?.sla?.deliveryTime}min</p>
            </div>
            <p className='text-gray-500'>
              {" "}
              {locality} {areaName}{" "}
            </p>
          </div>
        </div> 
    </div>
  );
};

export default Restaurant;
