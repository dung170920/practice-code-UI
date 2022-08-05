import {
  CircleLeftIcon,
  CircleRightIcon,
  EmailIcon,
  FacebookIcon,
  GoogleIcon,
  LockIcon,
  LogoIcon,
} from "./assets/icon";
import { hero } from "./assets/img";

function App() {
  return (
    <div className="flex justify-between min-h-screen font-primary">
      <div
        className="w-1/2 bg-cover relative hidden lg:block bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute bottom-20 flex justify-center w-full">
          <div className="max-w-md text-center">
            <span className="text-3xl font-bold leading-loose text-gray-900">
              Control Bussiness
            </span>
            <p className="font-light leading-7 text-gray-500">
              Dotra is the most comprehensive field service & asset managament
              platform with combining flexibility.
            </p>
            <div className="flex justify-center items-center pt-8 space-x-6">
              <button className="rounded-full focus:ring focus:ring-orange-500 focus:outline-none">
                <CircleLeftIcon />
              </button>
              <button className="rounded-full focus:ring focus:ring-orange-500 focus:outline-none">
                <CircleRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-2xl mx-auto">
        <div className="flex flex-col lg:px-14 px-8 xl:px-24 pt-10">
          <LogoIcon className="self-center md:self-end w-32" />
          <div className="pt-20 pb-6">
            <h1 className="text-3xl font-bold tracking-wide leading-loose whitespace-nowrap">
              Hi, Welcome back!
            </h1>
            <span className="font-light text-gray-500">
              Login now to manage your job made easy.
            </span>
            <div className="flex justify-between items-center pt-10 gap-x-6 flex-wrap whitespace-nowrap gap-y-4">
              <button className="flex items-center justify-center flex-1 py-4.5 px-3 rounded-lg bg-white border border-gray-400 whitespace-nowrap hover:bg-gray-50 focus:outline-none focus:ring-gray-100 focus:ring-4">
                <GoogleIcon className="w-6 h-6" />
                <span className="pl-3 font-medium text-gray-900">
                  Sign in with Google
                </span>
              </button>
              <button className="flex items-center justify-center flex-1 py-4.5 px-3 rounded-lg bg-blue-500 whitespace-nowrap hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-gray-100">
                <FacebookIcon className="w-6 h-6" />
                <span className="pl-3 font-medium text-white">
                  Sign in with Facebook
                </span>
              </button>
            </div>
            <div className="flex justify-between items-center pt-6">
              <hr className="w-full border-gray-400 " />
              <span className="px-4 font-light tracking-wider text-gray-500">
                or
              </span>
              <hr className="w-full border-gray-400 " />
            </div>
            <form action="">
              <div className="pt-6">
                <label htmlFor="email">Email address</label>
                <div className="flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-orange-500">
                  <div className="flex justify-center items-center pl-6">
                    <EmailIcon className="w-6 h-6 pointer-events-none" />
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value="hrd@dotra.co"
                    className="px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0 "
                  />
                </div>
              </div>
              <div className="pt-6">
                <label htmlFor="password">Password</label>
                <div className="flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-orange-500">
                  <div className="flex justify-center items-center pl-6">
                    <LockIcon className="w-6 h-6 pointer-events-none" />
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center pt-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="w-5 h-5 text-orange-500 bg-white rounded border border-gray-400 focus:outline-none focus:ring-orange-500"
                  />
                  <label htmlFor="remember" className="pl-4 text-gray-900">
                    Remember me
                  </label>
                </div>
                <a href="/#" className="text-teal-500 hover:text-teal-600">
                  Forgot password
                </a>
              </div>
              <div className="pt-8">
                <button
                  type="submit"
                  className="py-4 px-8 w-full text-white bg-orange-500 rounded-lg shadow-lg hover:bg-orange-600 focus:ring-4 focus:ring-red-100 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="pt-4">
              <div className="text-center text-gray-500">
                Not registered yet?{" "}
                <a
                  href="/#"
                  className="font-medium text-teal-500 hover:text-teal-600"
                >
                  Create an Account
                </a>
              </div>
              <div className="flex flex-wrap gap-y-2 justify-between items-center pt-14 text-center whitespace-nowrap">
                <span className="text-gray-500 flex-1">
                  © 2021 Dotra. All rights reserved.
                </span>
                <span className="flex items-center space-x-1 flex-1 justify-center">
                  <a href="/#" className="text-gray-500 hover:text-gray-600">
                    {" "}
                    Terms of Service
                  </a>
                  <span className="text-gray-500">&#183;</span>
                  <a href="/#" className="text-gray-500 hover:text-gray-600">
                    Privacy Policy
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
