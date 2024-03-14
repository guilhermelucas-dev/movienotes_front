import styled from "styled-components";


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

export const Form = styled.form`
  max-width: 113.7rem;
  margin: 3.8rem auto;

  > header {
    > h1 {
      margin-top: 2.4rem;
    }
  }

  > div {
    margin-top: 4rem;
  }

  > .wrapper {
    display: flex;
    gap: 4rem;
  }

  > textarea {
    margin-top: 3.2rem;
  }

  > h2 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.GRAY_TEXT}
  }

  .tags {
    display: flex;
    gap: 2.4rem;
    align-items: center;
    flex-wrap: wrap;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    border-radius: .8rem; 
    padding: 1.6rem;
  }

  .buttons {
    display: flex;
    gap: 4rem;
    border-radius: 1rem;
    font-weight: 500;
  
    > .button-delete {
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }

`;
