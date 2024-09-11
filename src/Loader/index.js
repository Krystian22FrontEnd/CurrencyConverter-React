import { BeatLoader } from "react-spinners";
import { StyledLoader } from "./styled";

export const Loader = () => {
  return (
    <StyledLoader>
      <BeatLoader color={"#eb8334"} size={40} />
    </StyledLoader>
  );
};
