import { useState } from "react";
import "./InputBox.css";
import Input from "./InputSlider";

const InputBoxes = () => {
  const [totalCost, setTotalCost] = useState(500);
  const [interestRate, setInterestRate] = useState(1);
  const [processingFee, setProcessingFee] = useState(1);
  const [tenure, setTenure] = useState(12);

  return (
    <>
      <div className="flex flex-col w-full py-3 px-3">
        <div className="flex flex-row gap-5">
          <button className="text-green px-2 py-1 rounded-md bg-bgColor font-bold">
            House EMI 🏠
          </button>
          <button className="text-dark-grey px-2 py-1 rounded-md">
            Car EMI 🚗
          </button>
        </div>

        <Input
          title="Total Cost of Assert"
          defaultValue={500}
          value={totalCost}
          minVal={500}
          maxVal={50000000}
          logic={setTotalCost}
        />
        <Input
          title="Interest Rate (in %)"
          defaultValue={1}
          value={interestRate}
          minVal={1}
          maxVal={30}
          logic={setInterestRate}
        />
        <Input
          title="Processing Fee (in %)"
          defaultValue={1}
          value={processingFee}
          minVal={1}
          maxVal={15}
          logic={setProcessingFee}
        />
        <Input
          title="Tenure"
          defaultValue={12}
          value={tenure}
          minVal={12}
          maxVal={180}
          logic={setTenure}
        />
      </div>
    </>
  );
};

export default InputBoxes;
