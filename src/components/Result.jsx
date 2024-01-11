import { useState } from "react";
import Input from "./Input";

const Result = ({ title, defaultValue, finalResult }) => {
console.log(finalResult)
  return (
    <div className="flex flex-col gap-6 item-center justify-center">
      <Input title="Total EMI Amount" defaultValue={2000} />
      <Input title="Total Down Payment" defaultValue={1000} />
      <Input title="Loan Per Month" defaultValue={1000} />
    </div>
  );
};

export default Result;
