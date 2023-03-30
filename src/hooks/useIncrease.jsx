import { useEffect, useRef, useState } from "react";

export const useIncrease = (number) => {
  const [increase, setIncrease] = useState(0);
  const interval = useRef();

  useEffect(() => {
    incraseNumber()

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  const incraseNumber = () => {
    interval.current = setInterval(() => {
      setIncrease((prev) => prev + number);
    }, 100);
  };

  const stopIncrease = () => {
    clearInterval(interval.current);
  }

  const continueIncrease = () => {
    stopIncrease()
    incraseNumber()
  }

  return {increase, stopIncrease, continueIncrease};
};
