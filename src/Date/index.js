import { useCurrentDate } from "../useCurrentDate";
import { StyledTime } from "./styled";

const Time = () => {
const localTime = useCurrentDate(); 

  return <StyledTime>Dzisiaj jest {localTime}</StyledTime>;
};

export default Time;
