import React from "react";
import {
  AlignBottom,
  AlignCenter,
  AlignLeft,
  AlignMiddle,
  AlignRight,
  AlignTop,
  ChevronDown,
} from "../assets/icons";

const Accordion = ({ title, children }) => {
  return (
    <details className="group">
      <summary className="flex w-full cursor-pointer  items-center justify-between border-b border-gray-200 py-4 px-6">
        <span className="font-semibold">{title}</span>
        <ChevronDown className="h-5 w-5 rotate-0 stroke-current text-gray-400 transition-transform group-open:rotate-180" />
      </summary>
      <div className="border-b border-gray-200 py-4 px-6 ">{children}</div>
    </details>
  );
};

export default Accordion;
