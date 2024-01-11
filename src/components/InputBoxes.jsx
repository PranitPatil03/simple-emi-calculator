/* eslint-disable react/prop-types */
import { useState } from "react";
import "./InputBox.css";
import Input from "./InputSlider";

const InputBoxes = ({ setFinalResult }) => {
  const [totalCost, setTotalCost] = useState(500);
  const [interestRate, setInterestRate] = useState(1);
  const [processingFee, setProcessingFee] = useState(1);
  const [tenure, setTenure] = useState(12);

  const calculateEMI = () => {
    const monthlyInterestRate = interestRate / 12 / 100;

    const emi =
      (totalCost *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, tenure)) /
      (Math.pow(1 + monthlyInterestRate, tenure) - 1);
    console.log("final Res", emi);

    const totalLoanAmount =
      emi *
      ((Math.pow(1 + monthlyInterestRate, tenure) - 1) /
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenure)));

    const totalDownPayment = totalLoanAmount - totalCost;

    const loanPerMonth = totalLoanAmount / tenure;

    const res = {
      emi: emi,
      totalLoanAmount: totalLoanAmount,
      totalDownPayment: totalDownPayment,
      loanPerMonth: loanPerMonth,
    };

    console.log(res);

    setFinalResult(res);
    return res;
  };

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
          finalResult={calculateEMI()}
          setFinalResult={setFinalResult} // Pass the setFinalResult function
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
