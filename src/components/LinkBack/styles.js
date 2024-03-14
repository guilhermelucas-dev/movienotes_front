import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${({theme}) => theme.COLORS.PINK};
  > svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`;