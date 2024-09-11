import React from 'react';
import { FaTrash } from 'react-icons/fa';

const PaymentHistory = () => {
    // Sample payment data (you can replace this with dynamic data from props or state)
    const payments = [
        {
            _id: '123456',
            userName: 'John Doe',
            bookingTime: '2024-09-10 14:30',
            paymentAmount: 500,
            currency: 'BDT',
            paymentStatus: 'Completed',
        },
        {
            _id: '789012',
            userName: 'Jane Smith',
            bookingTime: '2024-09-09 10:00',
            paymentAmount: 1000,
            currency: 'BDT',
            paymentStatus: 'Pending',
        },
        // Add more payment data here
    ];

    const handleDelete = (id) => {
        // Add logic for handling payment deletion
        console.log(`Deleted payment with ID: ${id}`);
    };

    return (
        <div className='container mx-auto px-4 py-6'>
            <h1 className='text-center my-5 font-bold text-primary text-2xl'>Payments History</h1>

            {/* Table for displaying payment data */}
            <div className='overflow-x-auto'>
                <table className='table-auto w-full text-left border-collapse border border-gray-200'>
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className='border px-4 py-2'>User Name</th>
                            <th className='border px-4 py-2'>Booking Time</th>
                            <th className='border px-4 py-2'>Payment Amount</th>
                            <th className='border px-4 py-2'>Status</th>
                            <th className='border px-4 py-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment) => (
                            <tr key={payment._id} className='hover:bg-gray-50'>
                                <td className='border px-4 py-2'>{payment.userName}</td>
                                <td className='border px-4 py-2'>{payment.bookingTime}</td>
                                <td className='border px-4 py-2'>
                                    {payment.paymentAmount} {payment.currency}
                                </td>
                                <td className='border px-4 py-2'>
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs ${payment.paymentStatus === 'Completed'
                                                ? 'bg-green-200 text-green-800'
                                                : 'bg-yellow-200 text-yellow-800'
                                            }`}
                                    >
                                        {payment.paymentStatus}
                                    </span>
                                </td>
                                <td className='border px-4 py-2'>
                                    <button
                                        onClick={() => handleDelete(payment._id)}
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

export default PaymentHistory;
