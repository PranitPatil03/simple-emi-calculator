import Input from "./Input";

const Result = ({ title, defaultValue }) => {
  return (
    <div className="flex flex-col gap-6 item-center justify-center">
      <Input title="Total Down Payment" defaultValue={2000} />
      <Input title="Loan Per Month" defaultValue={1000} />
    </div>
  );
};

export default Result;
