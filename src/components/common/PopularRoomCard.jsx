const PopularRoomCard = ({ popularRoom }) => {
    const { title, image, location } = popularRoom;
  
    return (
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        {/* Room Image */}
        <div
          className="w-full h-64 bg-center bg-cover rounded-lg shadow-md"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
  
        {/* Room Details */}
        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          {/* Room Title */}
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {title}
          </h3>
  
          {/* Room Location */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">{location}</p>
  
        
        </div>
      </div>
    );
  };
  
  export default PopularRoomCard;
  