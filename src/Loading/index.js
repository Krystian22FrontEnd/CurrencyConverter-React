import { LoadingParagraph } from "./styled";
import { Loader } from "../Loader";
export const Loading = () => (
  <LoadingParagraph>
    <Loader />
    Moment, pobieram dane z serwera...
  </LoadingParagraph>
);
