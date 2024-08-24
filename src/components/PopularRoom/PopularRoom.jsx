import axios from "axios";
import { useEffect, useState } from "react";

const PopularRoom = () => {
    const [popularRooms, setPopularRooms] = useState([])
    useEffect( () => {
        axios.get('popular_room.json')
        .then( data => {
            setPopularRooms(data.data)
        })
        .catch(err => {
            console.log(err.message);
        })
    },[])
  return (
    <div className=" mt-24 mb-24 lg:mb-48 md:mb-48">
        {/* title and description */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Most Popular Rooms </h1>
        <p className="mt-5 m-2">
          Explore our most popular rooms, chosen for their comfort, style, and
          amenities. <br /> Discover why guests love staying in these well-appointed
          spaces!
        </p>
      </div>

    </div>
  );
};

export default PopularRoom;
