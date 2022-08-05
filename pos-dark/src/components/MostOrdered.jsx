import React from "react";
import { ChevronDownIcon } from "../assets/icons";
import { food1, food2, food3 } from "../assets/imgs";

const mostOrdered = [
  {
    name: "Spicy seasoned seafood noodles",
    image: food1,
    count: 200,
  },
  {
    name: "Salted pasta with mushroom sauce",
    image: food2,
    count: 120,
  },
  {
    name: "Beef dumpling in hot and sour soup",
    image: food3,
    count: 80,
  },
];

const MostOrdered = () => {
  return (
    <div className="flex flex-col p-6 bg-gray-900 rounded-lg gap-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold leading-loose text-white">
          Most Ordered
        </h2>
        <button className="flex gap-x-2.5 py-3 px-4 rounded-lg border border-gray-700">
          <ChevronDownIcon />
          <span className="text-sm text-white">Today</span>
        </button>
      </div>
      <hr className="border-gray-700" />
      <div className="flex flex-col gap-y-4">
        {mostOrdered.map((order) => (
          <div className="flex gap-x-4 items-center" key={order.name}>
            <img className="w-14 h-14" src={order.image} alt="" />
            <div className="flex flex-col gap-y-0.5">
              <div className="text-sm font-medium text-white">{order.name}</div>
              <div className="text-xs text-gray-500">
                {order.count} dishes ordered
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="py-3.5 rounded-lg w-full border border-primary text-primary text-sm font-semibold">
        View all
      </button>
    </div>
  );
};

export default MostOrdered;
