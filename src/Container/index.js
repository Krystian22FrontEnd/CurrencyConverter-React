import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 10px;
  background-color: ${({theme}) => theme.colors.alto};
  margin-top: 100px;
  border-radius: 5px;
`;


export default Container;
