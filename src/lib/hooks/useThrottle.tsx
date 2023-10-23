import { useCallback, useRef } from "react";

export function useThrottle(
  callback: (...args: unknown[]) => void,
  delay: number
): ReturnType<typeof useCallback> {
  const throttleRef = useRef(false);

  return useCallback(
    (...args: unknown[]) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;
        setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [callback, delay]
  );
}
