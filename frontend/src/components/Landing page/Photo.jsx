import React from 'react';
import image from "../../assets/Images/photo.png";

export const Photo = () => {
  return (
    <div
      className="relative   w-full h-[40rem] overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Black Overlay (optional) */}
      {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
    </div>
  );
}
