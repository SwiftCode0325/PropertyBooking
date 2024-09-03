import { FaBed, FaBath, FaEye, FaChartArea } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";


const Card = ({ property }) => {
    const { _id, image, title, propertyType, features, location, description, price } = property || {};

    return (
        <Link
            to={`/details-page/${_id}`}
            className="shadow-lg rounded-lg overflow-hidden transition-transform transform  hover:shadow-2xl relative group"
        >
            <p className='absolute top-2 left-2 bg-[#01204E] p-2 rounded-lg text-white font-semibold text-sm'>{propertyType}</p>
            <figure className='h-[200px] overflow-hidden'><img src={image[0]} alt={title} className="w-full object-cover" /></figure>
            <div className='p-4'>
                <h1 className='font-bold'>{title}</h1>
                <p className='text-xs'>{description?.slice(0, 100)}..</p>
            </div>
            <div className='mx-4 mb-3 bg-gray-100 group-hover:bg-[#01204E] group-hover:text-white transition-all p-3 rounded-lg space-y-3'>
                <p className='flex items-center gap-1'><IoLocationOutline /> {location?.road}, {location?.area}, {location?.city}.</p>
                <hr />
                <div className='flex justify-around'>
                    <p className='flex items-center gap-1 text-sm'><FaBed /> {features?.bedRoom} beds</p>
                    <p className='flex items-center gap-1 text-sm'><FaChartArea />  {features?.squareFeet} sq ft</p>
                    <p className='flex items-center gap-1 text-xl font-bold text-[#01204E] group-hover:text-white transition-all'> {price} BDT</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;