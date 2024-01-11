import "./InputBox.css";
import Input from "./InputSlider";

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

        <Input title="Total Cost of Assert" defaultValue={500} />
        <Input title="Interest Rate (in %)" defaultValue={10} />
        <Input title="Processing Fee (in %)" defaultValue={2} />
        <Input title="Tenure" defaultValue={12} />
      </div>
    </>
  );
};

export default InputBoxes;
