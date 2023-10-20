export interface ComponentState {
  component: Component;
  setComponent: (value: Component) => void;
}

export type Component = "banner" | "numberConfirmation" | "final";
