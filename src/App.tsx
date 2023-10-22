import { useState, createRef, useEffect } from "react";
import "./App.css";
import { BackgroundVideo } from "./components/BackgroundVideo";
import { ContentProvider } from "./components/ContentProvider";
import { ComponentContext } from "./lib/context/componentContext";
import { Component, ComponentState } from "./lib/types/ComponentState";
import { PhoneChecker } from "./components/PhoneChecker";
import { Banner } from "./components/Banner";
import { ClosePhoneChecker } from "./components/ClosePhoneChecker";

function App() {
  const [component, setComponent] = useState<Component>("banner");
  const [currentPhone, setCurrentPhone] = useState("+7(___)___-__-__");
  const [valid, setValid] = useState(true);
  const [pressed, setPressed] = useState(0);
  const arrRefs = new Array(13)
    .fill(null)
    .map(() => createRef<HTMLButtonElement>());

  const state: ComponentState = {
    component,
    setComponent,
    currentPhone,
    setCurrentPhone,
    valid,
    setValid,
  };

  const handlePressKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      setPressed((state) => {
        if (state === arrRefs.length - 1) return 0;
        return state + 1;
      });
    }
    if (e.key === "ArrowLeft") {
      setPressed((state) => {
        if (state === 0 && arrRefs.length) return arrRefs.length - 1;
        if (state === 0 && arrRefs.length) return arrRefs.length - 1;
        return state - 1;
      });
    }

    if (e.key === "ArrowDown") {
      setPressed((state) => {
        if (state === 7) return 9;
        if (state === 8) return 10;
        if (state + 3 >= arrRefs.length - 1) return state + 4 - arrRefs.length;
        return state + 3;
      });
    }

    if (e.key === "ArrowUp") {
      setPressed((state) => {
        if (state === 10) return 8;
        if (state === 0 || state === 1) return 9;
        if (state === 2) return 10;
        if (state - 3 < 0) return state + 6;
        return state - 3;
      });
    }
  };

  useEffect(() => {
    addEventListener("keydown", handlePressKey);
    return () => {
      removeEventListener("keydown", handlePressKey);
    };
  }, []);

  useEffect(() => {
    // console.log(arrRefs);
    const next = arrRefs[pressed].current;
    if (next) next.focus();
  }, [arrRefs, pressed]);

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
