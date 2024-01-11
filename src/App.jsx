import { useState } from "react";
import InputBoxes from "./components/InputBoxes";
import Result from "./components/Result";

function App() {
    const [finalResult, setFinalResult] = useState(null);
  return (
    <div className="flex flex-row gap-[15rem]">
      <div className="flex items-center w-[30rem] h-[35rem] mt-[5rem] shadow-lg p-4">
        <InputBoxes setFinalResult={setFinalResult} ></InputBoxes>
      </div>
      <div className="flex items-center justify-center w-[30rem] h-[15rem] mt-[15rem] shadow-lg p-4">
        <Result finalResult={finalResult}></Result>
      </div>
    </div>
  );
}

export default App;
