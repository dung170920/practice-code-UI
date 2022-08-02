import React from "react";
import {
  ArrowRightIcon,
  DownloadIcon,
  HomeIcon,
  PaperDownloadIcon,
  WalletIcon,
} from "../assets/icons";

const sidebarMenu = [
  {
    label: "Menu",
    children: [
      { name: "Discover", icon: HomeIcon },
      { name: "Trending", icon: ArrowRightIcon },
      { name: "Streaming", icon: DownloadIcon },
      { name: "Playlist", icon: PaperDownloadIcon },
      { name: "Bookmark", icon: WalletIcon },
    ],
  },
  {
    label: "Category",
    children: [
      { name: "Live Stream", icon: HomeIcon },
      { name: "Tutorial", icon: ArrowRightIcon },
      { name: "Competition", icon: DownloadIcon },
      { name: "Community", icon: PaperDownloadIcon },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="px-8 pt-2 -mt-10 divide-y divide-gray-800">
      {sidebarMenu.map((item) => (
        <div className="py-10" key={item.label}>
          <span className="tracking-widest text-gray-500 uppercase text-xxs">
            {item.label}
          </span>
          <ul className="flex flex-col pt-5 space-y-8">
            {item.children.map((c) => (
              <li key={c.name}>
                <a
                  href="/"
                  className="flex items-center gap-x-4 text-gray-500 group"
                >
                  <span className="p-2 bg-gray-800 rounded-xl group-hover:text-white group-hover:bg-orange">
                    <c.icon className="fill-current " />
                  </span>
                  <span className="text-sm group-hover:text-white group-hover:font-semibold">
                    {c.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
