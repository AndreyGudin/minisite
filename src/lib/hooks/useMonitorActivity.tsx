import { useEffect, useRef, useState } from "react";
import { useThrottle } from "./useThrottle";

type UseMonitorActivityType = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useMonitorActivity = (): UseMonitorActivityType => {
  const [monitor, setMonitor] = useState(new Date());
  const [active, setActive] = useState(true);
  const intervalRef = useRef(0);

  const { newCallback: handleActivity, timer } = useThrottle(
    () => setMonitor(new Date()),
    1000
  );

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const lastActivity = monitor;
      const secondsDif = Math.abs(
        new Date(lastActivity).getSeconds() - new Date().getSeconds()
      );
      if (secondsDif >= 10) setActive(false);
    }, 1000);
  }, [monitor]);

  useEffect(() => {
    addEventListener("mousemove", () => handleActivity());
    addEventListener("keypress", () => handleActivity());

    return () => {
      clearTimeout(timer);
      clearInterval(intervalRef.current);
      removeEventListener("mousemove", () => handleActivity());
      removeEventListener("keypress", () => handleActivity());
    };
  }, [handleActivity, timer]);

  return { active, setActive };
};
