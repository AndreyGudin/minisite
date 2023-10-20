import { useState } from "react";
import "./App.css";
import { BackgroundVideo } from "./components/BackgroundVideo";
import { Banner } from "./components/Banner";
import { ContentProvider } from "./components/ContentProvider";
import { ComponentContext } from "./lib/context/componentContext";
import { Component, ComponentState } from "./lib/types/ComponentState";
import { PhoneInput } from "./components/PhoneInput";
import { PhoneKeyboard } from "./components/PhoneKeyboard";

function App() {
  const [component, setComponent] = useState<Component>("banner");
  const [phone, setPhone] = useState("");
  const state: ComponentState = {
    component,
    setComponent,
  };

  const handleClick = (value: string) => {
    setPhone((state) => state + value);
  };

  return (
    <>
      <ComponentContext.Provider value={state}>
        <ContentProvider>
          {component === "banner" && <Banner />}
          <PhoneInput value={phone} />
          <PhoneKeyboard onClick={handleClick} />
        </ContentProvider>
        <BackgroundVideo />
      </ComponentContext.Provider>
    </>
  );
}

export default App;
