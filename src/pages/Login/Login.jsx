import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-white py-8 min-h-screen flex justify-center items-center">
      <div className="flex flex-col-reverse lg:flex-row w-full max-w-4xl mx-auto overflow-hidden bg-[#ebf4f6] rounded-lg shadow-lg">
        {/* Content Section */}
        <div className="w-full lg:w-7/12 px-6 py-8">
          <div className="flex justify-start mx-auto">
            <h1 className="text-gray-700 mb-6 text-2xl md:text-3xl lg:text-4xl text-left font-extrabold">
              Codex Farm
            </h1>
          </div>

          <p className="mt-2 text-lg md:text-xl text-left text-gray-700">
            Welcome back! User
          </p>

           {/* Email Input */}
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-[#01204e]"
              htmlFor="SignupEmailAddress"
            >
              Email Address
            </label>
            <input
              id="SignupEmailAddress"
              className="block w-full px-4 py-2 text-black bg-[#F5F5F5] border border-gray-500 rounded-sm transition-colors duration-300 focus:bg-[#01204e] focus:text-white focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-[#01204e]"
                htmlFor="SignupPassword"
              >
                Password
              </label>
              <Link to="/forgot-password" className="text-xs text-gray-500 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <input
              id="SignupPassword"
              className="block w-full px-4 py-2 text-black bg-[#F5F5F5] border border-gray-500 rounded-sm transition-colors duration-300 focus:bg-[#01204e] focus:text-white focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#01204E] rounded-3xl hover:bg-sky-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign In
            </button>
          </div>

          <a
            href="#"
            className="flex items-center justify-center bg-white mt-4 text-gray-700 transition-colors duration-300 transform border border-gray-500 rounded-3xl hover:bg-gray-50"
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>
            <span className="w-5/6 px-4 py-2 font-bold text-center">
              Sign in with Google
            </span>
          </a>

          <p className="text-gray-500 text-sm text-center py-3">
            Don’t have an account?{" "}
            <Link to="/signup">
              <span className="font-bold underline">SignUp</span>
            </Link>
          </p>
        </div>

        {/* Promotional Section */}
        <div className="bg-[#01204e] py-10 px-5 flex items-center justify-center rounded-md lg:w-5/12">
          <div>
            <h1 className="font-bold text-2xl lg:text-3xl text-white text-center">
              Start Your Journey with Us
            </h1>
            <p className="text-md font-light mt-2 text-white text-center">
              Discover the world's best community, freelancer services, and business opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
