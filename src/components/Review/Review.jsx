import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewCard from "../common/ReviewCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: true,
    })
},[])
  useEffect(() => {
    axios
      .get("review.json")
      .then((data) => {
        setReviews(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div data-aos="fade-down-right" className=" mt-24 mb-24 lg:mb-48 md:mb-48">
      <Swiper
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
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
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.name}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
