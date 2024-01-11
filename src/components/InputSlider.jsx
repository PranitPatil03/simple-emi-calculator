import { useState } from "react";
import Input from "./Input";

const InputSlider = ({ title, defaultValue, value, minVal, maxVal, logic,finalResult }) => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    const val = event.target.value;
    console.log(val);
    setSliderValue(val);
    setChangeValues(event.target.value);
  };

  const setChangeValues = (newVal) => {
    logic(() => (value = newVal));
  };


  return (
    <div className="flex flex-col gap-6 mt-8">
      <Input title={title} defaultValue={defaultValue} value={value}></Input>

      <div className="flex items-center justify-around">
        <div className="w-full">
          <input
            type="range"
            min={minVal}
            max={maxVal}
            value={sliderValue}
            onChange={handleSliderChange}
            className="bg-grey slider-thumb appearance-none w-full h-[6px] bg-gray-300 rounded-full outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default InputSlider;
