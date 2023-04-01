import React from "react";

const ToggleButton = () => {
  return (
    <div className="bg-fuchsia-600">
      <label
        for="toggleFour"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input type="checkbox" id="toggleFour" className="sr-only" />
          <div className="box bg-dark block h-8 w-14 rounded-full"></div>
          <div className="dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition"></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleButton;
