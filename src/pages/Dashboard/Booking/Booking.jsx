import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import useGetAllBooking from '../../../hooks/useGetAllBooking';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { RiSecurePaymentLine } from 'react-icons/ri';


const Booking = () => {
  const [bookings, bookingsLoader, refetch, setRefetch] = useGetAllBooking();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentInfo, setIPaymentInfo] = useState({});

  const toggleModal = (booking) => {
    setIPaymentInfo(booking);
    setIsModalOpen(!isModalOpen);
  };

  const handleDelete = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "bg-[#01204E] mx-2 px-3 py-2 text-white",
        cancelButton: "bg-[#5994D4] mx-2 px-3 py-2 text-white",
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`http://localhost:5000/api/bookings/booked/delete/${id}`);
          if (response.status === 200) {
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your booking has been deleted.",
              icon: "success"
            });
            setRefetch(!refetch)
          }
        } catch (error) {
          toast.error('Failed to delete!');
          console.error('Error deleting!', error);
        }
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your booking file is safe :)",
          icon: "error"
        });
      }
    });

  };

  const handlePayments = async (e) => {
    e.preventDefault();
    const from = e.target;
    const userId = paymentInfo.user._id;
    const flatId = paymentInfo.flat._id;
    const sender = from.sender_number.value;
    const transitionId = from.transitionId.value;
    const amount = from.amount.value;

    console.log({ userId, flatId, sender, transitionId });
    try {
      const response = await axios.post(`http://localhost:5000/api/payment/transition`, { userId, flatId, sender, transitionId, amount });
      if (response.status === 200) {
        toast.success('payment sent successfully.');
        setIPaymentInfo({});
        setIsModalOpen(!isModalOpen);
      }
    } catch (error) {
      toast.error('Failed to payment!');
      console.error('Error payment!', error);
    }
  }


  return (
    <div className='container mx-auto px-4 py-6'>
      <h1 className='text-center my-5 font-bold text-primary text-2xl'>Booking</h1>

      {/* Table for displaying property data */}
      <div className='overflow-x-auto'>
        <table className='table-auto w-full text-left border-collapse border border-gray-200'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border px-4 py-2'>ID</th>
              <th className='border px-4 py-2'>Buyer Name</th>
              <th className='border px-4 py-2'>Buyer Phone</th>
              <th className='border px-4 py-2'>Room Author</th>
              <th className='border px-4 py-2'>Title</th>
              <th className='border px-4 py-2'>Location</th>
              <th className='border px-4 py-2'>Price</th>
              <th className='border px-4 py-2'>Status</th>
              <th className='border px-4 py-2'>Date</th>
              <th className='border px-4 py-2'>Payment</th>
              <th className='border px-4 py-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, idx) => (
              <tr key={booking._id} className='hover:bg-gray-50'>
                <td className='border px-4 py-2'>{idx + 1}</td>
                <td className='border px-4 py-2'>{booking?.user?.displayName || "unknown"}</td>
                <td className='border px-4 py-2'>{booking?.phone || "unknown"}</td>
                <td className='border px-4 py-2'>{booking?.flat?.auth?.name || "unknown"}</td>
                <td className='border px-4 py-2'>
                  <Link className='text-blue-600 underline' to={`/details-page/${booking?.flat?._id}`}>{booking?.flat?.title}</Link>
                </td>
                <td className='border px-4 py-2'>
                  {booking?.flat?.location?.area}, {booking?.flat?.location.city} ({booking?.flat?.location?.postalCode})
                </td>
                <td className='border px-4 py-2'>
                  {booking?.flat?.price} {booking?.flat?.currency}
                </td>
                <td className='border px-4 py-2'>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${booking?.status === 'Confirmed'
                      ? 'bg-green-200 text-green-800'
                      : 'bg-red-200 text-red-800'
                      }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className='border px-4 py-2'>
                  <span>{new Date(booking.createdAt).toLocaleDateString()}</span> <br />
                  <span>{new Date(booking.createdAt).toLocaleTimeString()}</span>
                </td>
                <td className='border px-4 py-2 text-center'>
                  <button
                    onClick={() => toggleModal(booking)}
                    className='text-red-500 hover:text-red-700 mx-2'
                    title='payment'
                  >
                    <RiSecurePaymentLine size={20} />
                  </button>
                </td>
                <td className='border px-4 py-2 text-center'>
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className='text-red-500 hover:text-red-700 mx-2'
                    title='Delete'
                  >
                    <FaTrash size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-center">Payments</h2>
            <div className='flex justify-center items-center'>
              <figure><img className='w-16 h-12' src="https://i.ibb.co.com/84xVB6Q/bkash-logo.png" alt="" /></figure>
              <figure><img className='w-16 h-12' src="https://i.ibb.co.com/PzZkjh6/Nagad-Logo.jpg" alt="" /></figure>
              <figure><img className='w-16 h-12' src="https://i.ibb.co.com/yy00wr4/dutch-bangla-rocket-logo-B4-D1-CC458-D-seeklogo-com.png" alt="" /></figure>
            </div>
            <div>
              <h1 className='my-4 text-center'><span className='font-bold underline'>01825406189</span> , Pay with this number and make the payment with the transition number! </h1>
            </div>

            <form onSubmit={handlePayments} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Sender Number</label>
                <input
                  name="sender_number"
                  required
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter Sender Number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Transition ID</label>
                <input
                  type="text"
                  name="transitionId"
                  required
                  placeholder="Enter Transition ID"
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Amount</label>
                <input
                  type="number"
                  name="amount"
                  required
                  placeholder="Enter Total Amount"
                  className="w-full p-2 border rounded"
                />
              </div>

              {/* Close Button */}
              <div className="flex justify-between">
                <button
                  type="button"
                  className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
                  onClick={toggleModal}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-accent"
                >
                  Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
