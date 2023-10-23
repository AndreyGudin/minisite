import { useState, createRef, useEffect } from "react";
import "./App.css";
import { BackgroundVideo } from "./components/BackgroundVideo";
import { ContentProvider } from "./components/ContentProvider";
import { ComponentContext } from "./lib/context/componentContext";
import { Component, ComponentState } from "./lib/types/ComponentState";
import { PhoneChecker } from "./components/PhoneChecker";
import { Banner } from "./components/Banner";
import { ClosePhoneChecker } from "./components/ClosePhoneChecker";
import { useArrowControls } from "./lib/hooks/useArrowControls";

function App() {
  const [component, setComponent] = useState<Component>("banner");
  const [currentPhone, setCurrentPhone] = useState("+7(___)___-__-__");
  const [valid, setValid] = useState(true);
  const arrRefs = new Array(13)
    .fill(null)
    .map(() => createRef<HTMLButtonElement>());

  useArrowControls({ arrRefs });

  const state: ComponentState = {
    component,
    setComponent,
    currentPhone,
    setCurrentPhone,
    valid,
    setValid,
  };

  return (
    <>
      <ComponentContext.Provider value={state}>
        <ContentProvider>
          {/* {component === "banner" && <Banner />} */}
          <PhoneChecker refs={arrRefs} />
          <ClosePhoneChecker ref={arrRefs[12]} />
        </ContentProvider>
        <BackgroundVideo />
      </ComponentContext.Provider>
    </>
  );
}

export default App;
