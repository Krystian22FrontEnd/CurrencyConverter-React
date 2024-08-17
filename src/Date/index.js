import { useCurrentDate } from "../useCurrentDate";
import { StyledTime } from "./styled";

const Time = () => {
  const myTime = useCurrentDate();

  return (
    <StyledTime>
      Dzisiaj jest{" "}
      {myTime.toLocaleTimeString("pl-PL", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })}
    </StyledTime>
  );
};

export default Time;
