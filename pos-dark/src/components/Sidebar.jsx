import React, { useState } from "react";
import {
  DiscountIcon,
  GraphIcon,
  HomeIcon,
  LogoutIcon,
  MessageIcon,
  NotificationIcon,
  SettingsIcon,
  StoreIcon,
} from "../assets/icons";

const Sidebar = () => {
  const menu = [
    { name: "Dashboard", icon: HomeIcon },
    { name: "Discounts", icon: DiscountIcon },
    { name: "Graph", icon: GraphIcon },
    { name: "Messages", icon: MessageIcon },
    { name: "Notifications", icon: NotificationIcon },
    { name: "Settings", icon: SettingsIcon },
    { name: "Logout", icon: LogoutIcon },
  ];

  const [activeMenu, setActiveMenu] = useState("Graph");
  return (
    <div className="flex flex-col gap-y-4 items-center py-8 w-24 bg-gray-900">
      <button className="p-2 bg-opacity-20 rounded-xl bg-primary">
        <StoreIcon />
      </button>
      <div className="flex flex-col gap-y-4 items-end self-end">
        {menu.map((item) => (
          <div
            key={item.name}
            className={`${
              activeMenu === item.name
                ? "bg-gray-800 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top  after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom"
                : ""
            }`}
          >
            <button
              className={`p-4 my-4 mr-4 ml-3 rounded-xl ${
                activeMenu === item.name
                  ? "text-white shadow-primary bg-primary"
                  : "text-primary"
              }`}
              onClick={() => setActiveMenu((prev) => (prev = item.name))}
            >
              <item.icon className="w-6 h-6 fill-current" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
