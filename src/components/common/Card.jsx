import { FaBed, FaBath, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Card = ({ property }) => {
    const { id } = property;
    console.log(id);

    return (
        <div
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
            style={{ borderColor: '#5994D4', borderWidth: '2px' }}
        >
            <img src={property?.image} alt={property?.title} className="w-full h-48 object-cover" />
            <div className="p-5">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#01204E' }}>{property?.title}</h3>
                <p className="text-sm mb-2" style={{ color: '#5994D4' }}>{property.location}</p>
                <p className="text-gray-700 mb-3">{property?.description}</p>
                <p className="text-lg font-bold mb-2" style={{ color: '#01204E' }}>{property?.rate}</p>
                <div className="flex justify-between text-gray-600 text-sm">
                    <span><FaBed className="inline-block mr-1" /> {property?.beds} Beds</span>
                    <span><FaBath className="inline-block mr-1" /> {property?.baths} Baths</span>
                    <span>{property?.area}</span>
                </div>
                <Link to={`/details-page/${id}`}>
                    <button className="mt-4 text-white px-4 py-2 rounded flex items-center" style={{ backgroundColor: '#01204E' }}>
                        <FaEye className="mr-2" /> See More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Card;