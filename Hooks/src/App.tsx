import "./App.css";
import { UseState } from "./components/useState";
import { UseEffect } from "./components/useEffect";
import { CustomeHook } from "./components/CustomeHook";
import { UseContext } from "./components/Contexts/UseContext";
import { UseMemo } from "./components/usememo/UseMemo";

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
      <hr/>
      <UseMemo/>
    </>
  );
}

export default App;
