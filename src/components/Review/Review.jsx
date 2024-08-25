import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewCard from "../common/ReviewCard";
import AOS from "aos";
import "aos/dist/aos.css";
import TitleHome from "../common/TitleHome";
const Review = () => {
  // state
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
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
    <div className='container mx-auto'>
      <div className='mb-3'>
        <TitleHome title={'Testimonials'} description={'Discover how Room Lagbea has made a difference for our users. Their feedback  <br/> showcases the seamless process and exceptional service we have provided.'}/>
      </div>
      <div
       data-aos="zoom-in-down"
        className=" mt-24 mb-24 lg:mb-48 md:mb-48 overflow-hidden"
      >
        <Swiper
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
         
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
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 5,
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
    </div>
  );
};

export default Review;
