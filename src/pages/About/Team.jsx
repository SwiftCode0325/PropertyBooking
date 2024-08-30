import { useState } from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const teamMembers = [
  {
    name: 'Michel Richard',
    title: 'Architecture',
    imageUrl: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  },
  {
    name: 'Famhida Ruko',
    title: 'Engineer',
    imageUrl: 'https://images.pexels.com/photos/1726710/pexels-photo-1726710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  },
  {
    name: 'Alex Anfantino',
    title: 'Site Manager',
    imageUrl: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  },
  {
    name: 'Jackline Farah',
    title: 'Engineer',
    imageUrl: 'https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  },{
    name: 'Lorem Farah',
    title: 'Engineer',
    imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  },{
    name: 'Jack Sarah',
    title: 'Engineer',
    imageUrl: 'https://images.pexels.com/photos/997512/pexels-photo-997512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  },
];

const TeamMemberCard = ({ name, title, imageUrl }) => {
    const [showIcons, setShowIcons] = useState(false);
  
    const toggleIcons = () => {
      setShowIcons(!showIcons);
    };
  
    return (
      <div className="relative">
        <img
          className="w-52 h-52 rounded-full mx-auto border-4 hover:border-[#01204e] border-white shadow-lg"
          src={imageUrl}
          alt={name}
        />
        <div
          className="absolute bottom-2 right-0 bg-[#01204e] rounded-full px-3 py-1 shadow-lg cursor-pointer"
          onClick={toggleIcons}
        >
          <span className="text-white text-lg font-bold">+</span>
        </div>
  
        {showIcons && (
          <div
            className={`flex flex-col items-center absolute bottom-12 right-0 space-y-2 transition-transform duration-500`}
          >
            <a
              href="https://facebook.com"
              className="bg-[#01204e] p-2 rounded-full text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              className="bg-[#01204e] p-2 rounded-full text-white"
            >
              <FaInstagram />
            </a>
          </div>
        )}
  
        <div className="text-center mt-4">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-[#01204e]">{title}</p>
        </div>
      </div>
    );
  };
  
  const Team = () => {
    return (
      <div className="bg-white py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Our Professional Team</h2>
          <div className="text-[#01204e] mt-2">TEAM MEMBERS</div>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="team-swiper"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.name}>
              <TeamMemberCard
                name={member.name}
                title={member.title}
                imageUrl={member.imageUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default Team;