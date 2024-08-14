import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#01204E]">
      <div className="max-w-7xl mx-auto p-12 grid grid-cols md:grid-cols-2 md:ms-24 lg:grid-cols-4 gap-5">
        {/* contact section */}
        <div className="text-white">
          <h1 className="text-2xl">Contact Us</h1>
          <div className="mt-5 text-bold text-[#848484] ">
            <p className="flex items-center hover:text-white transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <span className="ms-1">+880 1611-000000</span>
            </p>
            <p className="flex items-center mt-2 hover:text-white transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <span className="ms-1">office@gmail.com</span>{" "}
            </p>
            <p className="flex items-center mt-2 hover:text-white transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span>Dhaka, Bangladesh</span>
            </p>
          </div>
        </div>
        {/* useful links */}
        <div className="text-white">
          <h1 className="text-2xl">Useful Links</h1>
          <div className="mt-5 text-bold flex flex-col text-[#848484]">
            <Link className="underline mt-1 hover:text-white transition-all">
              Blog
            </Link>
            <Link className="underline mt-1 hover:text-white transition-all">
              Pricing
            </Link>
            <Link className="underline hover:text-white transition-all">
              About Us
            </Link>
            <Link className="underline mt-1 hover:text-white transition-all">
              Contact Us
            </Link>
          </div>
        </div>
        {/* rent with us links*/}
        <div className="text-white">
          <h1 className="text-2xl">Rent with Us</h1>
          <div className="mt-5 text-bold text-[#848484]">
            <div className="mt-5 text-bold flex flex-col text-[#848484]">
              <Link className="underline hover:text-white transition-all">Rent a Room</Link>
              <Link className="underline mt-1 hover:text-white transition-all">Book Now</Link>
              <Link className="underline mt-1 hover:text-white transition-all">Buy your place</Link>
              <Link className="underline mt-1 hover:text-white transition-all">Privacy Policy</Link>
            </div>
          </div>
        </div>
        {/* recent post */}
        <div className="text-white">
          <h1 className="text-2xl">Recent posts</h1>
          <div className="mt-5 text-bold text-[#848484]">
            <div className="flex gap-3">
              <img
                className="w-12 h-12 rounded-lg"
                src="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg"
                alt=""
              />
              <div className="hover:text-white transition-all">
                <h1>Great Service</h1>
                <p>August 14, 2024</p>
              </div>
            </div>
            <div className="flex gap-3 mt-2">
              <img
                className="w-12 h-12 rounded-lg"
                src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
              <div className="hover:text-white transition-all">
                <h1>Best Coverage</h1>
                <p>July 20, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-12 flex flex-col md:flex-row lg:flex-row justify-between items-center text-white">
        <div className="text-center">
          {/* copyright text */}
          <p>Copyright by codeXfarm. All Rights Reserved.</p>
        </div>
        <div className="flex gap-3 text-xl cursor-pointer mt-2">
          {/* social icons */}
          <p>
            {" "}
            <FaFacebook />{" "}
          </p>
          <p>
            {" "}
            <FaTwitter />{" "}
          </p>
          <p>
            {" "}
            <FaLinkedin />{" "}
          </p>
          <p>
            {" "}
            <FaGithub />{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
