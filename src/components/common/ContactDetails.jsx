import { IoMailOpenOutline } from "react-icons/io5";
import { FaMobileScreen } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const ContactDetails = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
        });
      }, []);
  return (
    <div className="container overflow-hidden mx-auto mt-24 mb-24 grid grid-cols gap-6 md:grid-cols-3 lg:grid-cols-3">
      {/* card 1 */}
      <div data-aos="fade-right" className="bg-[#EBF4F6] p-5 text-center rounded-lg hover:shadow-md transition-all">
        <div className="flex justify-center mt-3">
          <IoMailOpenOutline className="text-4xl" />
        </div>
        <h1 className="mt-3 font-bold mb-3">
          <a href="mail:codeXfarm@gmail.com" target="_blank">
            codeXfarm@gmail.com
          </a>
        </h1>
        <p className="mb-3">
          This is our official contact email. Feel free to reach out to us for
          any inquiries, collaboration, or support. We are here to help you!
        </p>
      </div>
      {/* card 2 */}
      <div data-aos="fade-up-right" className="bg-[#EBF4F6] p-5 hover:shadow-md transition-all text-center rounded-lg">
        <div className="flex justify-center mt-3">
          <FaMobileScreen className="text-4xl" />
        </div>
        <h1 className="mt-3 font-bold mb-3">
          <a href="tel:123456789" target="_blank">
            <span className="qodef-m-title-text">Call us +31 555 777 8</span>
          </a>
        </h1>
        <p className="mb-3">
          Our phone lines are open for any questions, partnerships, or
          assistance you may need. Don’t hesitate to give us a call—we’re here
          to provide the support you’re looking for!
        </p>
      </div>

      {/* card 3 */}
      <div data-aos="fade-up-left" className="bg-[#EBF4F6] p-5 hover:shadow-md transition-all text-center rounded-lg">
        <div className="flex justify-center mt-3">
          <IoLocationOutline className="text-4xl" />
        </div>
        <h1 className="mt-3 font-bold mb-3">Dhaka, Bangladesh</h1>
        <p className="mb-3">
          Located in the heart of Dhaka, Bangladesh, we are always ready to
          connect with you. Whether its a business inquiry, collaboration, or
          support, feel free to reach out. We are here to assist you!
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
