// import { useState } from "react";
import "./App.css";
import Fflinks from "./fflinks/fflinks";
// import { createPortal } from "react-dom";
// import Header from "./Components/Header/Header";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <Fflinks />
      {/* <Header />
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div>
        <p>i am in the parent div</p>
        {createPortal(<p>i m in the document body</p>, document.body)}
      </div> */}
    </>
  );
}

export default App;
