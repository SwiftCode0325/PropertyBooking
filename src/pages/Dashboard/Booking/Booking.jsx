import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Booking = () => {
  // Sample property data (you can replace this with dynamic data from props or state)
  const properties = [
    {
      _id: '66cce6e529b8fffb4ba82b44',
      id: 'R1234500',
      title: 'Spacious 3 Bedroom Apartment in Gulshan for Family',
      location: {
        area: 'Gulshan',
        city: 'Dhaka',
        postalCode: 10001,
      },
      price: 1000,
      currency: 'USD',
      status: 'Available',
    },
    // Add more property data here
  ];

  const handleDelete = (id) => {
    // Add logic for handling property deletion
    console.log(`Deleted property with ID: ${id}`);
  };

  return (
    <div className='container mx-auto px-4 py-6'>
      <h1 className='text-center my-5 font-bold text-primary text-2xl'>Booking</h1>

      {/* Table for displaying property data */}
      <div className='overflow-x-auto'>
        <table className='table-auto w-full text-left border-collapse border border-gray-200'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border px-4 py-2'>ID</th>
              <th className='border px-4 py-2'>Title</th>
              <th className='border px-4 py-2'>Location</th>
              <th className='border px-4 py-2'>Price</th>
              <th className='border px-4 py-2'>Status</th>
              <th className='border px-4 py-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property._id} className='hover:bg-gray-50'>
                <td className='border px-4 py-2'>{property.id}</td>
                <td className='border px-4 py-2'>{property.title}</td>
                <td className='border px-4 py-2'>
                  {property.location.area}, {property.location.city} ({property.location.postalCode})
                </td>
                <td className='border px-4 py-2'>
                  {property.price} {property.currency}
                </td>
                <td className='border px-4 py-2'>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      property.status === 'Available'
                        ? 'bg-green-200 text-green-800'
                        : 'bg-red-200 text-red-800'
                    }`}
                  >
                    {property.status}
                  </span>
                </td>
                <td className='px-4 py-2  flex items-center justify-center'>
                  <button
                    onClick={() => handleDelete(property._id)}
                    className='text-red-500 hover:text-red-700'
                    title='Delete'
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
