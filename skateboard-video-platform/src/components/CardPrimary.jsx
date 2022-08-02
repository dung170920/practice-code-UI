import React from "react";

const CardPrimary = ({ content, index }) => {
  return (
    <div
      style={{ backgroundImage: `url(${content.background})` }}
      className={`h-96 rounded-2.5xl p-10 bg-no-repeat bg-cover overflow-hidden relative ${
        index === 0 ? "w-2/3" : "w-1/3"
      }`}
    >
      <h3 className="text-3xl font-semibold max-w-xxs">{content.title}</h3>
      <div className="flex flex-wrap-reverse items-center pt-4 pr-24">
        <div className="relative flex items-center justify-center rounded-full w-14 h-14">
          <img className="w-12 h-12 rounded-full" src={content.avatar} alt="" />
          <span className="absolute inset-0 border rounded-full border-white/50" />
          <content.check_icon className="absolute bottom-0 right-0" />
        </div>
        <div className="flex flex-col py-4 pl-2">
          <a className="font-medium tracking-wider" href="/#">
            {" "}
            {content.name}{" "}
          </a>
          <span className="text-xs tracking-wider text-white/80">
            {content.views} • {content.created_at}
          </span>
        </div>
      </div>
      <span class="px-2 py-0.5 absolute right-5 bottom-5 rounded-lg bg-gray-900/50 text-xxs">
        {content.duration}
      </span>
    </div>
  );
};

export default CardPrimary;
