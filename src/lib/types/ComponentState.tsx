export interface ComponentState {
  component: Component;
  setComponent: (value: Component) => void;
  currentPhone: string;
  setCurrentPhone: (value: string) => void;
}

export type Component = "banner" | "numberConfirmation" | "final";
