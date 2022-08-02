import React from "react";

const rightPane = [
  {
    title: "Inertial Velocity",
    value: 7.68,
    unit: " km/s",
    percentage: 80,
  },
  {
    title: "Altitude",
    value: 390.0,
    unit: " km",
    percentage: 30,
  },
  {
    title: "Apogee",
    value: 404.4,
    unit: " km",
    percentage: 40,
  },
  {
    title: "Perigee",
    value: 389.4,
    unit: " km",
    percentage: 70,
  },
  {
    title: "Inclination",
    value: 51.67,
    unit: "°",
    percentage: 75,
  },
  {
    title: "Range to ISS",
    value: 0.02,
    unit: " km",
    percentage: 95,
  },
];

const RightPane = () => {
  return (
    <div className="w-64 space-y-8">
      {rightPane.map((pane, index) => (
        <div
          key={pane.title}
          className={`flex justify-between items-end ${
            index === 4 ? "pt-14" : ""
          }`}
        >
          <div className="flex flex-col space-y-2">
            <span className="text-xs text-white">{pane.title}</span>
            <div className="relative w-36 h-1.5">
              <div className="w-36 absolute left-0 top-0 rounded-full h-1.5 bg-gray-600/20"></div>
              <div
                style={{ width: `${pane.percentage}%` }}
                className="absolute left-0 top-0 bg-blue rounded-full h-1.5"
              ></div>
            </div>
          </div>
          <div className="pl-4 text-lg font-medium text-white whitespace-nowrap">
            {pane.value} {pane.unit}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightPane;
