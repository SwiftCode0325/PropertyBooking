import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-[#EBF4F6] py-10">
      <div className="flex w-full h-screen  mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
        <div className="w-full px-6 py-8 md:px-8 lg:w-7/12">
          <div className="flex justify-start mx-auto">
            <h1 className="text-gray-700 mb-14 text-5xl text-left font-extrabold">
              Codex Farm
            </h1>
          </div>

          <p className="mt-3 text-xl text-left text-gray-700 dark:text-gray-200">
            Welcome back! User
          </p>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              className="block w-full px-4 py-2 text-black bg-sky-100 border border-gray-500 rounded-sm transition-colors duration-300 focus:bg-black focus:text-black dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                htmlFor="loggingPassword"
              >
                Password
              </label>
              <a
                href="#"
                className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
              >
                Forget Password?
              </a>
            </div>

            <input
              id="loggingPassword"
              className="block w-full px-4 py-2 text-black bg-sky-100 border border-gray-500 rounded-sm transition-colors duration-300 focus:bg-black focus:text-black dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
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
            className="flex items-center justify-center bg-white mt-4 text-gray-700 transition-colors duration-300 transform border border-gray-500 rounded-3xl dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
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
            Dont have an account?{" "}
            <Link to="/register">
              <span className="font-bold underline">Register</span>{" "}
            </Link>{" "}
          </p>
        </div>

        <div className="bg-[#5994D4] my-5 mx-5 rounded-md lg:w-5/12 flex flex-col items-center justify-center">
          <div className="py-16 px-5">
            <h1 className="font-bold text-4xl">Start Your journey with us</h1>
            <p className="text-md font-light mt-2 ">
              Discover the worlds best community and freelancer services and
              buiseness owner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
