import { useEffect, useState } from "react";

const Time = () => {
  const [myTime, setMyTime] = useState("");

  useEffect(() => {
    const intvervalId = setInterval(() => {
      const myDate = new Date();
      const localDate = myDate.toLocaleString("pl-PL");
      setMyTime(localDate);
    }, 1000);

    // return clearInterval(intvervalId);
  }, []);

  return <div>Dzisiaj jest {myTime}</div>;
};

export default Time;
