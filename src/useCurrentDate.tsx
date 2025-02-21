import { useEffect, useState } from "react";

export const useCurrentDate = () => {
  const [myTime, setMyTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setMyTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return myTime;
};
