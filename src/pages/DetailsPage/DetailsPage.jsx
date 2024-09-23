import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Typed from "typed.js";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";


const DetailsPage = () => {
  const { user } = useContext(AuthContext)
  const { room } = useLoaderData();
  const navigate = useNavigate();

  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings:
        [
          'This is all ',
          'This is all Details ',
          'This is all Details in',
          'This is all Details in this',
          'This is all Details in this flat'
        ],
      typeSpeed: 40,
      startDelay: 500,
      backDelay: 200,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    const form = e.target;
    const buyer_name = form.buyer_name.value;
    const buyer_email = form.buyer_email.value;
    const number = form.number.value;
    const address = form.address.value;

    const bookingData = {
      userId: user._id,
      flatId: room?._id,
      phone: number,
      address,
    }

    try {
      const { data } = await axios.post("https://room-psi-ten.vercel.app/api/bookings/book-room", bookingData);
      toast.success("Booking has been created!");
      setIsModalOpen(false);
      navigate('/dashboard/booking')

    } catch (error) {
      toast.error("something want wrong! try again")
      console.log(error);
    }

  }

  return (

    <div className="min-h-screen  flex justify-center items-center">
      <div className="relative">
        <h2 className="text-primary text-4xl font-bold text-center uppercase">
          <span ref={el} />
        </h2>


        <div className="flex flex-col lg:flex-row items-center lg:max-w-6xl md:h-[550px]  md:max-w-3xl mx-auto  bg-secondary border-2  rounded-lg shadow-lg mt-8 mb-8 overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img src={room?.image[0]} alt="" className="w-full h-56 sm:h-72 lg:h-full lg:w-1/2 object-cover lg:max-h-full" />
          <div className="p-6 sm:p-8 flex-1 text-primary">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent mb-4">{room?.title}</h2>
            <p className="text-sm sm:text-base mb-4">{room?.description}</p>
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-bold flex items-center"> {room?.price} BDT</p>
              <p className="text-sm sm:text-base">Available From : {room?.availableFrom}</p>
              <p className="text-sm sm:text-base">Area : {room?.features?.squareFeet} sq ft</p>
              <p className="text-sm sm:text-base">Beds : {room?.features?.bedRoom}</p>
              <p className="text-sm sm:text-base">bathRoom : {room?.features?.bathRoom}</p>
              <p className="text-sm sm:text-base">kitchen : {room?.features?.kitchen}</p>
              <p className="text-sm sm:text-base">Belkoni : {room?.features?.hasBalcony ? "Yes" : "No"}</p>
              <p className="text-sm sm:text-base">Baths : {room?.features?.bedRoom}</p>
              <p className="text-sm sm:text-base">Location : {room?.location?.block}, {room?.location?.road}, {room?.location?.area}, {room?.location?.city}, {room?.location?.district}.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">

          {/* here is button  */}
          {room?.auth?.email === user?.email || user?.role === "admin" || user?.role === "owner" ? "" : <button className="px-3 py-2 my-4 bg-primary text-white font-bold rounded hover:bg-accent" onClick={toggleModal}>
            Booking Now
          </button>}


          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Booking Form</h2>


                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                      type="text"
                      disabled
                      name="buyer_name"
                      className="w-full p-2 border rounded"
                      defaultValue={user?.displayName}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                      type="email"
                      name="buyer_email"
                      disabled
                      className="w-full p-2 border rounded"
                      defaultValue={user?.email}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Contact Number</label>
                    <input
                      name="number"
                      required
                      type="number"
                      className="w-full p-2 border rounded"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Address</label>
                    <input
                      type="text"
                      name="address"
                      required
                      placeholder="Enter your full address"
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
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>


      </div>

    </div>

  );
};

export default DetailsPage;