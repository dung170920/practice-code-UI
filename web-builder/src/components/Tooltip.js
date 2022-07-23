import React from "react";

const Tooltip = ({ children }) => {
  return (
    <div className="absolute inset-y-0 left-12 hidden group-hover:flex items-center">
      <div className="relative whitespace-nowrap px-4 py-2 bg-white rounded-md shadow-lg font-semibold text-gray-900">
        <div className="absolute inset-y-0 flex items-center -left-1">
          <div className="h-2 w-2 rotate-45 bg-white"></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
