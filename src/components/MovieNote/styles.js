import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_TAG};
  
  border: none;
  border-radius: 1rem;
  padding: 2.2rem;
  margin-bottom: 2.4rem;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  .raitng-star {
    margin-top: .8rem;
    text-align: left;

    > svg {
      color: ${({theme}) => theme.COLORS.PINK};
      margin-right: 0.6rem;

    }
  }

  > p {
    margin-top: 1.5rem;
    color: ${({theme}) => theme.COLORS.GRAY_TEXT};
    text-align: justify;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 2.4rem;

    > span {
    background-color: ${({theme}) => theme.COLORS.GRAY_400};
    color: ${({theme}) => theme.COLORS.COLOR_TAG};
    }
  }
`;