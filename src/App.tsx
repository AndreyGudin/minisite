import { useState } from "react";
import "./App.css";
import { BackgroundVideo } from "./components/BackgroundVideo";
import { Banner } from "./components/Banner";
import { ContentProvider } from "./components/ContentProvider";
import { ComponentContext } from "./lib/context/componentContext";
import { Component, ComponentState } from "./lib/types/ComponentState";
import { PhoneKeyboard } from "./components/PhoneKeyboard";

function App() {
  const [component, setComponent] = useState<Component>("banner");
  const state: ComponentState = {
    component,
    setComponent,
  };
  return (
    <>
      <ComponentContext.Provider value={state}>
        <ContentProvider>
          {component === "banner" && <Banner />}
          <PhoneKeyboard />
        </ContentProvider>
        <BackgroundVideo />
      </ComponentContext.Provider>
    </>
  );
}

export default App;
