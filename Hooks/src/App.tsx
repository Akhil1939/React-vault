import "./App.css";
import { UseState } from "./components/useState";
import { UseEffect } from "./components/useEffect";
import { CustomeHook } from "./components/CustomeHook";
import { UseContext } from "./components/Contexts/UseContext";

function App() {
  return (
    <>
      <p>basic Hooks</p>
      <UseState />
      <hr />
      <UseEffect />
      <hr />
      <CustomeHook />
      <hr/>
      <UseContext/>
    </>
  );
}

export default App;
