import { Dispatch, SetStateAction, useCallback, useEffect } from "react";

interface UsePhoneInputsControlsProps {
  callback: Dispatch<SetStateAction<string>>;
}

export const usePhoneInputsControls = ({
  callback,
}: UsePhoneInputsControlsProps) => {
  const handlePressDigits = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "1":
          callback((state) => state + e.key);
          break;
        case "2":
          callback((state) => state + e.key);
          break;
        case "3":
          callback((state) => state + e.key);
          break;
        case "4":
          callback((state) => state + e.key);
          break;
        case "5":
          callback((state) => state + e.key);
          break;
        case "6":
          callback((state) => state + e.key);
          break;
        case "7":
          callback((state) => state + e.key);
          break;
        case "8":
          callback((state) => state + e.key);
          break;
        case "9":
          callback((state) => state + e.key);
          break;
        case "0":
          callback((state) => state + e.key);
          break;
        case "Backspace":
          callback((state) => state + "_");
          break;

        default:
          break;
      }
    },
    [callback]
  );

  useEffect(() => {
    addEventListener("keydown", handlePressDigits);
    return () => {
      removeEventListener("keydown", handlePressDigits);
    };
  }, [handlePressDigits]);
};
