import { useState } from "react";
import { FuelerIcon, HamburgerIcon, StarIcon } from "./assets/icon";
import {
  avatar1,
  avatar2,
  avatar3,
  chef,
  dish,
  driver,
  leaf,
  vegetable,
} from "./assets/img";

function App() {
  const activeMenu = "Home";
  const menu = ["Home", "Delivery", "Pricing", "FAQs", "Contact"];
  const avatars = [avatar1, avatar2, avatar3];
  const [sidebarOpen, setsidebarOpen] = useState(false);

  return (
    <div
      className={`w-full min-h-screen font-primary text-gray-900 bg-gradient-to-br from-transparent to-green-100 ${
        sidebarOpen ? "overflow-hidden h-screen" : ""
      }`}
    >
      <nav className="flex justify-between items-center py-8 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24">
        <a href="/#" className="text-3xl md:text-4xl font-bold tracking-wide">
          Organ<span className="text-green">o</span>
        </a>
        <div
          className={`inset-0 transition-all bg-white/70 backdrop-blur-xl z-20 md:static md:bg-transparent md:flex items-center justify-center space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row lg:space-x-14 ${
            sidebarOpen ? "fixed flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8">
            {menu.map((item) => (
              <li
                className={`text-lg md:text-base lg:text-lg font-medium group ${
                  activeMenu === item && "text-green"
                }`}
              >
                <a href="/#">{item}</a>
                <div className="h-0.5 bg-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full duration-300 ease-out"></div>
              </li>
            ))}
          </ul>
          <button className="flex items-center justify-center h-13 px-7 font-medium text-white bg-green rounded-xl hover:shadow-primary transition-shadow duration-300">
            Get Started
          </button>
        </div>
        <button
          onClick={() => setsidebarOpen((prev) => (prev = !prev))}
          className="block md:hidden relative z-30"
        >
          <HamburgerIcon className="w-8 h-8 fill-current text-gray-900" />
        </button>
      </nav>
      <div className="flex flex-wrap-reverse gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="relative z-10 md:w-1/2 w-full">
          <img
            className="absolute top-0 right-0 md:-top-4 md:-right-8 w-24 h-auto"
            src={leaf}
            alt=""
          />
          <span className="flex items-center px-1 text-xl text-green">
            <span className="font-medium">100% Organic food</span>
            <img className="w-auto h-8" src={vegetable} alt="" />
          </span>
          <h1 className="pt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight whitespace-nowrap">
            Healthy Lifestyle <br />
            is your only <br />
            <span className="whitespace-nowrap text-green">
              {" "}
              unfair advantage{" "}
            </span>
          </h1>
          <p className="pt-8 sm:text-lg max-w-md font-normal text-gray-600 leading-relaxed">
            Choose healthy habits with Organo daily meal prepared by our expert
            nutritionist and chef
          </p>
          <div className="flex pt-8 space-x-4 sm:space-x-6">
            <button className="flex justify-center items-center w-full sm:w-auto h-13 px-8 bg-green font-medium text-white rounded-xl whitespace-nowrap hover:shadow-primary transition-shadow duration-300">
              Get Started
            </button>
            <button className="flex justify-center items-center w-full sm:w-auto h-13 px-8 font-medium text-gray-900 border border-gray-900 rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300">
              Explore Menu
            </button>
          </div>
          <div className="flex pt-20">
            <img src={chef} alt="" className="w-24 h-auto" />
            <div className="pt-5 pl-3">
              <div className="text-xl font-bold leading-relaxed">
                Chef of the month
              </div>
              <div className="inline-flex text-gray-600 leading-relaxed">
                People loved his 🍳
              </div>
              <div className="font-bold text-green leading-relaxed">
                80+ famous dishes
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:w-1/2 w-full flex flex-col justify-between">
          <img
            src={dish}
            alt=""
            className="w-96 lg:w-full drop-shadow-2xl self-center lg:self-end"
          />
          <div className="absolute right-0 lg:-right-6 top-0 lg:top-28 flex flex-col py-5 px-7 rounded-2xl shadow-xl bg-white/80 backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="flex -space-x-3">
              {avatars.map((avatar) => (
                <div
                  className="w-13 h-13 rounded-full border-4 border-white object-cover overflow-hidden"
                  key={avatar}
                >
                  <img src={avatar} alt="" />
                </div>
              ))}
            </div>
            <div className="pt-3 font-bold">Happy customers</div>
            <div className="flex items-center text-gray-600 leading-relaxed">
              <StarIcon className="w-5 h-5" />
              <span className="pl-1">4.9 (+2.5k Ratings)</span>
            </div>
          </div>
          <div className="absolute left-0 bottom-0 md:bottom-32 lg:bottom-16 flex bg-white/80 rounded-2xl shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <img className="w-auto h-20 self-end" src={driver} alt="" />
            <div className="pr-7 pl-2 py-5">
              <div className="font-bold">Fast delivery</div>
              <div className="text-gray-600 leading-relaxed">
                30 mins delivery 🚀
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-end space-x-1 font-bold">
            <span>Powered by</span>
            <FuelerIcon className="w-6 h-6 text-gray-900 fill-current" />
            <span>Fueler</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
