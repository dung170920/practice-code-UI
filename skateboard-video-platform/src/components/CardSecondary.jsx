import React from "react";
import { CheckBlueIcon } from "../assets/icons";

const CardSecondary = ({ content }) => {
  return (
    <div className="w-64 rounded-2.5xl overflow-hidden relative">
      <img src={content.background} alt="" className="h-40" />
      <div className="absolute flex items-center justify-center rounded-full right-5 top-34 w-14 h-14">
        <img className="w-12 h-12 rounded-full" src={content.avatar} alt="" />
        <span className="absolute inset-0 border rounded-full border-white/50" />
        <CheckBlueIcon className="absolute bottom-0 right-0" />
      </div>
      <span className="px-2 py-0.5 absolute right-2 top-2 text-white rounded-lg bg-gray-900/50 text-xxs">
        {content.duration}
      </span>
      <div className="px-5 py-5 bg-gray-800">
        <div className="flex items-center">
          <span className="text-xs font-normal tracking-wider text-gray-400">
            {content.name}
          </span>
          <span
            className={`w-2 h-2 ml-2 rounded-full ${
              content.color === "green" ? "bg-green" : "bg-orange"
            }`}
          />
        </div>
        <h3 className="inline-block pt-1 font-medium leading-relaxed">
          {content.title}
        </h3>
        <span className="inline-block pt-4 text-sm tracking-wider text-gray-500">
          {content.views} • {content.created_at}
        </span>
      </div>
    </div>
  );
};

export default CardSecondary;
