import InputBoxes from "./components/InputBoxes";

function App() {
  return (
    <div className="flex flex-row gap-[15rem]">
      <div className="flex w-[30rem] h-[50rem] mt-[5rem] shadow-lg p-4">
        <InputBoxes></InputBoxes>
      </div>
      <div className="flex w-[30rem] h-[50rem] mt-[5rem] shadow-lg p-4"></div>
    </div>
  );
}

export default App;
