import Header from "./Header";
import PurchaseHandle from "./PurchaseHandle";
import { useState } from "react";

function App() {
  const [navMenu, setNavMenu] = useState("hidden");
  const [show, setShow] = useState(false);

  // ChatGPT generated, working on it later (it works correctly tho...)
  const showNavMenu = () => {
    setShow((prevShow) => {
      const newState = !prevShow;
      setNavMenu(newState ? "" : "hidden");
      return newState;
    });
  };

  return (
    <div className="dark:bg-black relative overflow-hidden min-h-screen">
      <Header navMenu={navMenu} showNavMenu={showNavMenu} />
      <PurchaseHandle />
    </div>
  );
}

export default App;
