import { useContext, useEffect } from "react";
import { Component } from "../types/ComponentState";
import { useMonitorActivity } from "./useMonitorActivity";
import { ComponentContext } from "../context/componentContext";

export const useInactivityRedirect = (component: Component) => {
  const { active } = useMonitorActivity();
  const { setComponent, setPlay, setCurrentPhone } =
    useContext(ComponentContext);

  useEffect(() => {
    if (!active) {
      setComponent(component);
      setPlay(true);
      setCurrentPhone("+7(___)___-__-__");
    }
  }, [active, component, setComponent, setPlay]);
};
