import React, { useState } from "react";
import "./InputBox.css";
import Input from "./Input";

const InputBoxes = () => {
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

        <Input title="Total Cost of Asset" defaultValue={500} />
        <Input title="Interest Rate (in %)" defaultValue={10} />
        <Input title="Processing Fee (in %)" defaultValue={2} />
        <Input title="Total Down Payment" defaultValue={1000} />
        <Input title="Loan Per Month" defaultValue={1000} />
        <Input title="Tenure (in months)" defaultValue={12} />
      </div>
    </>
  );
};

export default InputBoxes;
