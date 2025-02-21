import styled from "styled-components";


export const Fieledset = styled.fieldset`
  border: 3px solid ${({theme}) => theme.colors.graphit};
  padding: 20px 0;
  border-radius: 5px;
`;

export const Legend = styled.legend`
  border: 2px solid ${({theme}) => theme.colors.graphit};
  border-radius: 5px;
  padding: 10px 10px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.westSide};
  color: ${({theme}) => theme.colors.white};
`;

export const LabelText = styled.span`
  display: inline-block;
  padding: 0px 20px;
  max-width: 200px;
  width: 100%;
  color: ${({theme}) => theme.colors.black};

  @media (max-width: 650px) {
    padding: 2px;
  }
`;

export const Input = styled.input`
  display: inline-block;
  border: 2px solid ${({theme}) => theme.colors.westSide};
  max-width: 400px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;

  @media (max-width: 650px) {
    margin: 5px 0;
  }
`;

export const Button = styled.button`
  border: 2px solid ${({theme}) => theme.colors.graphit};
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.silver};
  padding: 20px 0;
  width: 100%;

  &:hover {
    background-color: ${({theme}) => theme.colors.westSide};
  }

  &:active {
    background-color: ${({theme}) => theme.colors.neonCarrot};
  }
`;

export const Paragraph = styled.p`
  padding-bottom: 30px;
  text-align: center;
  color: ${({theme}) => theme.colors.westSide};
  font-size: 130%;

  @media (max-width: 650px) {
    text-align: center;
  }
`;

export const StyledParagraph = styled.p`

  @media (max-width: 650px) {
    text-align: center;
  }
`;

export const PrimaryParagraph = styled(Paragraph)`
text-align: center;
padding-bottom: 10px;
font-size: 80%;
color: ${({theme}) => theme.colors.graphit};
`