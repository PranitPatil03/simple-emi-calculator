const Input = ({ title, defaultValue, value }) => {
  return (
    <div className="flex flex-row justify-between items-center gap-10">
      <h2 className="text-black text-lg">{title}</h2>

      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-green">
          ₹
        </span>
        <input
          value={value}
          type="number"
          id="cost"
          className="outline-none border-dark-grey text-green px-8 py-1 rounded-md bg-bgColor w-[150px]"
          defaultValue={defaultValue}
          style={{ appearance: "textfield", textAlign: "right" }}
        />
      </div>
    </div>
  );
};

export default Input;
