import { useContext, useEffect } from "react";
import { Component } from "../types/ComponentState";
import { useMonitorActivity } from "./useMonitorActivity";
import { ComponentContext } from "../context/componentContext";

export const useInactivityRedirect = (component: Component) => {
  const { active } = useMonitorActivity();
  const { setComponent } = useContext(ComponentContext);

  useEffect(() => {
    if (!active) setComponent(component);
  }, [active, component, setComponent]);
};
