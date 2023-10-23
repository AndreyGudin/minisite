import { useState, createRef, useCallback, useEffect } from "react";
import "./App.css";
import { BackgroundVideo } from "./components/BackgroundVideo";
import { ContentProvider } from "./components/ContentProvider";
import { ComponentContext } from "./lib/context/componentContext";
import { Component, ComponentState } from "./lib/types/ComponentState";
import { PhoneChecker } from "./components/PhoneChecker";
import { Banner } from "./components/Banner";
import { ClosePhoneChecker } from "./components/ClosePhoneChecker";
import { useArrowControls } from "./lib/hooks/useArrowControls";
import { useDelay } from "./lib/hooks/useDelay";
import { FinalMessage } from "./components/FinalMessage";
import { QrCode } from "./components/QrCode";

function App() {
  const [component, setComponent] = useState<Component>("start");
  const [currentPhone, setCurrentPhone] = useState("+7(___)___-__-__");
  const [valid, setValid] = useState(true);
  const [play, setPlay] = useState(true);

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
  useArrowControls({ arrRefs });

  useDelay({ callback: () => setComponent("banner"), delay: 5000 });

  const handleBannerClick = useCallback(() => {
    setComponent("numberConfirmation");
    setPlay(false);
  }, []);

  const handleClosePhoneCheckerClick = useCallback(() => {
    setComponent("banner");
    setPlay(true);
  }, []);

  return (
    <>
      <ComponentContext.Provider value={state}>
        <ContentProvider>
          {component === "banner" && <Banner onClick={handleBannerClick} />}
          {component === "numberConfirmation" && (
            <>
              <PhoneChecker refs={arrRefs} />
              <div className='h-full flex flex-col justify-between items-end ml-auto'>
                <ClosePhoneChecker
                  onClick={handleClosePhoneCheckerClick}
                  ref={arrRefs[12]}
                />
                <QrCode />
              </div>
            </>
          )}
          {component === "final" && (
            <>
              <FinalMessage />
              <QrCode />
            </>
          )}
        </ContentProvider>
        <BackgroundVideo play={play} />
      </ComponentContext.Provider>
    </>
  );
}

export default App;
