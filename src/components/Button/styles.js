import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme })  => theme.COLORS.GRAY_400};

  margin-top: 2.4rem;
  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;
  border-radius: 1rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }

`;