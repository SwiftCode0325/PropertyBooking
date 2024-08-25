import axios from "axios";
import { useEffect, useState } from "react";
import TitleHome from "../common/TitleHome";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import PopularRoomCard from "../common/PopularRoomCard";
import Loader from "../common/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
const PopularRoom = () => {
  const [popularRooms, setPopularRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("popular_room.json")
      .then((data) => {
        setPopularRooms(data.data);
        setLoading(false); 
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false); 
      });
  }, []);
  useEffect( () => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  },[])
  return (
    <div className="mt-24 mb-24 lg:mb-48 md:mb-48 container mx-auto">
      {/* Title and description */}
      <TitleHome
      
        title={"Most Popular Rooms"}
        description={`Explore our most popular rooms, chosen for their comfort, style, and amenities. <br/> Discover why guests love staying in these well-appointed spaces!`}
      />
      <div  data-aos="zoom-in-down" className="mt-24">
      
        {loading ? (
          <div className="flex justify-center items-center">
           <Loader/>
          </div>
        ) : (
          <Swiper
            key={popularRooms.length} 
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1500: {
                slidesPerView: 5,
              },
            }}
          >
            {popularRooms.map((popularRoom) => (
              <SwiperSlide key={popularRoom.title}>
                <PopularRoomCard popularRoom={popularRoom} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default PopularRoom;
