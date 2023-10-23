import { useEffect, useState } from "react";

interface UseArrowControlsProps {
  arrRefs: React.RefObject<HTMLButtonElement>[];
}
export const useArrowControls = ({ arrRefs }: UseArrowControlsProps) => {
  const [pressed, setPressed] = useState(0);

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
};
