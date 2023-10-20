import { createContext } from "react";
import { ComponentState } from "../types/ComponentState";

export const ComponentContext = createContext<ComponentState>({
  component: "banner",
  setComponent: () => {},
});
