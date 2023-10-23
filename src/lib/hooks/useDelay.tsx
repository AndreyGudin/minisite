import { useEffect } from "react";

interface useDelayProps {
  callback: () => void;
  delay: number;
}

export const useDelay = ({ callback, delay }: useDelayProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, []);
};
