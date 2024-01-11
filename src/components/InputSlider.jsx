import { useState } from "react";
import Input from "./Input";

const InputSlider = ({ title, defaultValue }) => {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <div className="flex flex-col gap-6 mt-8">
      <Input title={title} defaultValue={defaultValue}></Input>

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

export default InputSlider;
