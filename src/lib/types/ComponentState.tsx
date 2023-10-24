export interface ComponentState {
  component: Component;
  setComponent: (value: Component) => void;
  currentPhone: string;
  setCurrentPhone: (value: string) => void;
  valid: boolean;
  setValid: (value: boolean) => void;
  play: boolean;
  setPlay: (value: boolean) => void;
}

export type Component = "start" | "banner" | "numberConfirmation" | "final";
