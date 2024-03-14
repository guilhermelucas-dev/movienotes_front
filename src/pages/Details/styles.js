import styled from 'styled-components';

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

  .header-star {
    margin-top: 2.4rem;
    display: flex;
    align-items: center;

    > svg {
      height: 2rem;
      width: 2rem;
      margin-right: 1rem;
      color: ${({theme}) => theme.COLORS.PINK};
    }

    > h1 {
    font-size: 3.6rem;
    font-weight: 500;
    margin-right: 2rem;
  }
  
  }
  .user-created {
    margin-top: 2.4rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    > svg {
      height: 1.6rem;
      width: 1.6rem;
      color: ${({theme}) => theme.COLORS.PINK};
    }

    .user-image {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
  }
    
  }

  .tags {
    margin-top: 4rem;
  }

  > p:first-of-type {
    margin-top: 4rem;
  }

  > p {
    margin-bottom: 2.4rem;
    text-align: justify;
  }

`;

