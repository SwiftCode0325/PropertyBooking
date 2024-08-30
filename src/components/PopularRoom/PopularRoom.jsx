import axios from "axios";
import { useEffect, useState,useRef } from "react";
import TitleHome from "../common/TitleHome";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
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
    <div className=" mt-24 mb-24 lg:mb-48 md:mb-48 className='container mx-auto'">
        {/* title and description */}
      <TitleHome title={'Most Popular Rooms'} description={`Explore our most popular rooms, chosen for their comfort, style, and amenities. <br/> Discover why guests love staying in these well-appointed spaces!`}/>
      <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
       
      </Swiper>
      </div>
    </div>
  );
};

export default PopularRoom;
