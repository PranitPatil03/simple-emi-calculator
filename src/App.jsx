import InputBoxes from "./components/InputBoxes";
import Result from "./components/Result";

function App() {
  return (
    <div className="flex flex-row gap-[15rem]">
      <div className="flex items-center w-[30rem] h-[35rem] mt-[5rem] shadow-lg p-4">
        <InputBoxes></InputBoxes>
      </div>
      <div className="flex items-center justify-center w-[30rem] h-[10rem] mt-[15rem] shadow-lg p-4">
        <Result></Result>
      </div>
    </div>
  );
}

export default App;
