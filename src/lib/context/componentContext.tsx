import { createContext } from "react";
import { ComponentState } from "../types/ComponentState";

export const ComponentContext = createContext<ComponentState>({
  component: "banner",
  setComponent: () => {},
  currentPhone: "+7(___)___-__-__",
  setCurrentPhone: () => {},
  valid: true,
  setValid: () => {},
  play: true,
  setPlay: () => {},
});
