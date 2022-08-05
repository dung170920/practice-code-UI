import React from "react";
import { OptionsIcon } from "../assets/icons";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
} from "../assets/imgs";

const orders = [
  {
    avatar: avatar1,
    name: "Eren Jaegar",
    menu: "Spicy seasoned seafood noodles",
    total: "$125",
    status: "completed",
  },
  {
    avatar: avatar2,
    name: "Reiner Braunn",
    menu: "Salted Pasta with mushroom sauce",
    total: "$145",
    status: "preparing",
  },
  {
    avatar: avatar3,
    name: "Levi Ackerman",
    menu: "Beef dumpling in hot and sour soup",
    total: "$105",
    status: "pending",
  },
  {
    avatar: avatar4,
    name: "Historia Reiss",
    menu: "Hot spicy fried rice with omelet",
    total: "$45",
    status: "completed",
  },
  {
    avatar: avatar5,
    name: "Armin Arlert",
    menu: "Spicy seasoned seafood noodles",
    total: "$125",
    status: "completed",
  },
  {
    avatar: avatar6,
    name: "Hanji Zoe",
    menu: "Hot spicy fried rice with omelet",
    total: "$245",
    status: "completed",
  },
];

const OrderReport = () => {
  return (
    <div className="p-6 bg-gray-900 rounded-lg">
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-xl font-semibold leading-loose text-white">
          Order Report
        </h2>
        <button className="flex py-3 px-4 rounded-lg border border-gray-700 gap-x-2.5">
          <OptionsIcon />
          <span className="text-sm text-white">Filter order</span>
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-sm font-semibold text-white">
            <td className="py-4 border-b border-gray-700">Customer</td>
            <td className="py-4 border-b border-gray-700">Menu</td>
            <td className="py-4 border-b border-gray-700 text-right">
              Total Payment
            </td>
            <td className="py-4 border-b border-gray-700 text-center">
              Status
            </td>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr className="text-sm text-gray-500">
              <td className="py-4">
                <div className="flex gap-4 items-center">
                  <img width="32" src={order.avatar} alt="" />
                  <span> {order.name} </span>
                </div>
              </td>
              <td className="py-4">{order.menu}</td>
              <td className="py-4 tabular-nums text-right">{order.total}</td>
              <td className="py-4 flex justify-center">
                <span
                  className={`flex justify-center py-1 w-24 font-medium capitalize rounded-full ${
                    order.status === "completed"
                      ? "bg-accent-green/20 text-accent-green"
                      : order.status === "preparing"
                      ? "bg-accent-purple/20 text-accent-purple"
                      : order.status === "pending"
                      ? "bg-accent-orange/20 text-accent-orange"
                      : ""
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderReport;
