import React from "react";
import { ChevronDownIcon, NotificationIcon, SearchIcon } from "../assets/icons";
import { avatar1 } from "../assets/imgs";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 max-w-xl relative">
        <input
          type="text"
          placeholder="Search"
          className="items-center w-full h-10 px-4 text-sm font-normal tracking-wider text-white placeholder-gray-500 bg-white/10 rounded-xl focus:outline-none"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-6">
          <SearchIcon className="text-gray-500 stroke-current" />
        </div>
      </div>
      <div className="flex items-center">
        <img src={avatar1} alt="" className="w-8 h-8 rounded-full" />
        <a className="inline-flex items-center pl-4" href="/#">
          <span className="text-xs font-medium tracking-widest">Thomas</span>
          <ChevronDownIcon className="text-gray-500 fill-current" />
        </a>
        <button className="pl-8 p-0.5 relative">
          <NotificationIcon className="text-gray-500 fill-current" />
          <span className="absolute top-0 w-2 h-2 bg-red-500 border border-gray-900 rounded-full right-1"></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
