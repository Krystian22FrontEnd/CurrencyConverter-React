import { useEffect, useState } from "react";
import "./style.css";

const Time = () => {
  const [myTime, setMyTime] = useState("");

  useEffect(() => {
    const intvervalId = setInterval(() => {
      const myDate = new Date();
      const localDate = myDate.toLocaleDateString("pl-PL", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      setMyTime(localDate);
    }, 1000);

    // return clearInterval(intvervalId);
  }, []);

  return <div className="clock">Dzisiaj jest {myTime}</div>;
};

export default Time;
