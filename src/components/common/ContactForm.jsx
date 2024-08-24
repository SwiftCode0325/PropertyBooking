import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const ContactForm = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
    },[])
  return (
    <div className="container mx-auto mb-24 overflow-hidden">
      <div data-aos="fade-up-right" className="text-center">
        <h1 className="text-4xl font-bold">Ask Before Booking</h1>
        <p className=" space-x-3 uppercase mt-3 tracking-widest">
          Contact us anytime
        </p>
        <p className="mt-5 m-2">
          Please contact us before booking to ensure availability. We’re
          available <br />  anytime for any questions or assistance you may need.
        </p>
      </div>
      <section className="py-6 mt-20 dark:bg-gray-100 dark:text-gray-900">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div data-aos="fade-up-left" className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Dhaka, Bangladesh</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+31 555 777 8</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>codeXfarm@gmail.com</span>
              </p>
            </div>
          </div>
          <form data-aos="fade-up-right"
            noValidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-1 text-lg font-medium text-gray-800">
                Full name
              </span>
              <input
                type="text"
                placeholder="Leroy Jenkins"
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#EBF4F6] dark:bg-gray-200"
              />
            </label>
            <label className="block">
              <span className="mb-1 text-lg font-medium text-gray-800">
                Email address
              </span>
              <input
                type="email"
                placeholder="leroy@jenkins.com"
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#EBF4F6] dark:bg-gray-200"
              />
            </label>
            <label className="block">
              <span className="mb-1 text-lg font-medium text-gray-800">
                Message
              </span>
              <textarea
                rows="3"
                placeholder="Your message here..."
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#EBF4F6] dark:bg-gray-200"
              ></textarea>
            </label>
           
            <button
              type="button"
              className="self-start px-8 py-3 text-lg font-semibold text-white bg-[#01204E] rounded-md shadow focus:outline-none focus:ring-2 focus:ring-[#EBF4F6] hover:bg-[#EBF4F6] hover:text-black"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
