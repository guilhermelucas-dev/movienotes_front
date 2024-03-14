import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 6.4rem 0;
  }
  ::-webkit-scrollbar {
    width: .8rem;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.COLORS.PINK};
    border-radius: .8rem;
  }

`; 
export const Content = styled.div`
  max-width: 113.7rem;
  margin: 0 auto;
  flex-direction: column;


  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.8rem;

    > h1 {
      flex: 1;
    }

    > button {
      width: 20.7rem;
    }
  }
`; 

export const NewMovie = styled(Link)`
  width: 20.7rem;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme })  => theme.COLORS.GRAY_400};
  padding: 1.6rem;
  border-radius: 1rem;
  font-weight: 500;

  > svg {
    height: 1.6rem;
    width: 1.6rem;
  }

  > .add-movie {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

