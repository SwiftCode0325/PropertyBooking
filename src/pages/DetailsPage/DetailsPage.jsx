import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Typed from "typed.js";


const DetailsPage = () => {
  const { room } = useLoaderData();
  console.log(room);
  
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings:
        [
          'This is all ',
          'This is all Details ',
          'This is all Details in',
          'This is all Details in this',
          'This is all Details in this flat'
        ],
      typeSpeed: 40,
      startDelay: 500,
      backDelay: 200,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div className="md:min-h-screen flex justify-center items-center">
      <div className="relative">
        <h2 className="text-primary text-4xl font-bold text-center uppercase">
          <span ref={el} />
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:max-w-6xl md:h-[550px]  md:max-w-3xl mx-auto  bg-secondary border-2  rounded-lg shadow-lg mt-8 mb-8 overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img src={room?.image[0]} alt="" className="w-full h-56 sm:h-72 lg:h-full lg:w-1/2 object-cover lg:max-h-full" />
          <div className="p-6 sm:p-8 flex-1 text-primary">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent mb-4">{room?.title}</h2>
            <p className="text-sm sm:text-base mb-4">{room?.description}</p>
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-bold flex items-center"> {room?.price} BDT</p>
              <p className="text-sm sm:text-base">Available From : {room?.availableFrom}</p>
              <p className="text-sm sm:text-base">Area : {room?.features?.squareFeet} sq ft</p>
              <p className="text-sm sm:text-base">Beds : {room?.features?.bedRoom}</p>
              <p className="text-sm sm:text-base">bathRoom : {room?.features?.bathRoom}</p>
              <p className="text-sm sm:text-base">kitchen : {room?.features?.kitchen}</p>
              <p className="text-sm sm:text-base">Belkoni : {room?.features?.hasBalcony ? "Yes" : "No"}</p>
              <p className="text-sm sm:text-base">Baths : {room?.features?.bedRoom}</p>
              <p className="text-sm sm:text-base">Location : {room?.location?.block}, {room?.location?.road}, {room?.location?.area}, {room?.location?.city}, {room?.location?.district}.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;