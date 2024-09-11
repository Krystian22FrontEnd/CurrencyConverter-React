import { LoadingParagraph } from "./styled";
import { Loader } from "../Loader";
export const Loading = () => {
  return (
    <>
      <LoadingParagraph>
        <Loader />
        Moment, pobieram dane z serwera...
      </LoadingParagraph>
    </>
  );
};
