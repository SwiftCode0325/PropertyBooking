import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Typed from "typed.js";


const DetailsPage = () => {
  const items = useLoaderData();
  console.log(items)

  const { id } = useParams()

  const item = items.find(item => item.id == id);

  const { image, title, description, rate, area, beds, baths, location, dayning, kitchen, belkoni, floor } = item;



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
      backDelay: 200, // Delay before backspacing starts
      loop: true,
      loopCount: Infinity, // Infinite loop
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true, // This prevents deleting similar starting words
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="relative">
        <h2 className="text-primary text-4xl font-bold text-center uppercase">   <span ref={el} /></h2>

        <div className="flex flex-col lg:flex-row items-center lg:max-w-6xl h-[550px]  md:max-w-3xl mx-auto  bg-secondary border-2 border-primary rounded-lg shadow-lg mt-8 mb-8 overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img src={image} alt={title} className="w-full h-56 sm:h-72 lg:h-full lg:w-1/2 object-cover lg:max-h-full" />
          <div className="p-6 sm:p-8 flex-1 text-primary">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent mb-4">{title}</h2>
            <p className="text-sm sm:text-base mb-4">{description}</p>
            <div className="space-y-2">
              <p className="text-sm sm:text-base">Rate: {rate}</p>
              <p className="text-sm sm:text-base">Area: {area} sq ft</p>
              <p className="text-sm sm:text-base">Floor: {floor}</p>
              <p className="text-sm sm:text-base">Beds: {beds}</p>
              <p className="text-sm sm:text-base">Dayning: {dayning}</p>
              <p className="text-sm sm:text-base">kitchen: {kitchen}</p>
              <p className="text-sm sm:text-base">Belkoni: {belkoni}</p>
              <p className="text-sm sm:text-base">Baths: {baths}</p>
              <p className="text-sm sm:text-base">Location: {location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;