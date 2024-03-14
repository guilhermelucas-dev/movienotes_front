import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.2rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.5rem;
  margin-right: 0.8rem;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_TAG};
  color: ${({theme}) => theme.COLORS.COLOR_TAG};
`;