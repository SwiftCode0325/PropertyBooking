import { FaEnvelope, FaPhone, FaInfoCircle, FaWallet, FaBed, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useGetAllBooking from "../../../hooks/useGetAllBooking";
import useGetAllPayments from "../../../hooks/useGetAllPayments";
const UserHome = () => {
    const navigate = useNavigate();
    const [bookings] = useGetAllBooking();
    const [payments] = useGetAllPayments();
    const totalPayments = payments.reduce((acc, payment) => acc + payment.amount, 0);

    const handleBookingClick = () => {
        navigate("/dashboard/booking");
    };

    const handlePaymentClick = () => {
        navigate("/dashboard/payment_history");
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                {/* Admin Info Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Admin Contact Information</h2>
                    <div className="flex items-center mb-2">
                        <FaEnvelope className="text-blue-500 mr-2" />
                        <span>Email: <a href="mailto:admin@gmail.com" className="text-blue-500">admin@gmail.com</a></span>
                    </div>
                    <div className="flex items-center mb-2">
                        <FaPhone className="text-green-500 mr-2" />
                        <span>Phone: <a href="tel:01825406189" className="text-green-500">01825406189</a></span>
                    </div>
                </div>

                {/* Owner Role Request Information */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Request for Owner Role</h2>
                    <p className="text-gray-600 mb-4">
                        To request owner access, please contact the admin. Once the admin has reviewed your request, they will change your role accordingly.
                    </p>
                    <div className="flex items-center text-yellow-600">
                        <FaInfoCircle className="mr-2" />
                        <span>Note: After contacting the admin, your role will be updated as per the admin's approval.</span>
                    </div>
                </div>

                {/* User Booking and Payment Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Your Booking & Payment Summary</h2>

                    {/* Booking Details */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <FaBed className="text-purple-500 mr-2" />
                            <span className="text-gray-700">Total Bookings: <span className="font-bold">{bookings.length}</span></span>
                        </div>
                        <button
                            onClick={handleBookingClick}
                            className="text-blue-500 hover:text-blue-600 flex items-center"
                        >
                            View Bookings <FaArrowRight className="ml-1" />
                        </button>
                    </div>

                    {/* Payment Details */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FaWallet className="text-green-500 mr-2" />
                            <span className="text-gray-700">Total Payments: <span className="font-bold">{totalPayments}</span> BDT</span>
                        </div>
                        <button
                            onClick={handlePaymentClick}
                            className="text-blue-500 hover:text-blue-600 flex items-center"
                        >
                            View Payments <FaArrowRight className="ml-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;