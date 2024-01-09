import React, { useState } from "react";

const Input = ({ title, defaultValue }) => {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <div className="flex flex-col gap-6 mt-8">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-black text-lg">{title}</h2>

        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-green">
            ₹
          </span>
          <input
            type="number"
            id="cost"
            className="outline-none border-dark-grey text-green px-8 py-1 rounded-md bg-bgColor w-[150px]"
            defaultValue={defaultValue}
            style={{ appearance: "textfield", textAlign: "right" }}
          />
        </div>
      </div>

      <div className="flex items-center justify-around">
        <div className="w-full">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            className="bg-grey slider-thumb appearance-none w-full h-[6px] bg-gray-300 rounded-full outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
