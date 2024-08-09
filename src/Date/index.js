import { useEffect, useState } from "react";
import { StyledTime } from "./styled";

const Time = () => {
  const [myTime, setMyTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setMyTime(new Date(), 1000);

      return () => {
        clearInterval(intervalId);
      };
    });
  }, [myTime]);

  const localTime = myTime.toLocaleTimeString("pl-PL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return <StyledTime>Dzisiaj jest {localTime}</StyledTime>;
};

export default Time;
