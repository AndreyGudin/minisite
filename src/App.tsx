import { useState } from "react";
import "./App.css";
import { BackgroundVideo } from "./components/BackgroundVideo";
import { ContentProvider } from "./components/ContentProvider";
import { ComponentContext } from "./lib/context/componentContext";
import { Component, ComponentState } from "./lib/types/ComponentState";
import { PhoneChecker } from "./components/PhoneChecker";

function App() {
  const [component, setComponent] = useState<Component>("banner");
  const [currentPhone, setCurrentPhone] = useState("+7(___)___-__-__");
  const state: ComponentState = {
    component,
    setComponent,
    currentPhone,
    setCurrentPhone,
  };

  return (
    <>
      <ComponentContext.Provider value={state}>
        <ContentProvider>
          {/* {component === "banner" && <Banner />} */}
          <PhoneChecker />
        </ContentProvider>
        <BackgroundVideo />
      </ComponentContext.Provider>
    </>
  );
}

export default App;
