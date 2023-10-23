import { useCallback, useRef } from "react";

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false);
  const timerRef = useRef(0);

  return {
    newCallback: (...args: any[]) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;
        timerRef.current = setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    timer: timerRef.current,
  };
}
