import styled from "styled-components";

export const LoadingParagraph = styled.p`
    display: block;
    color: ${({theme}) => theme.colors.westSide};
    padding: 30px;
    text-align: center;
    font-size: 150%;
`

export const ErrorParagraph = styled(LoadingParagraph)`
color: ${({theme}) => theme.colors.red};
`