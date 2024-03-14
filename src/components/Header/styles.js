import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.header`
  grid-area: header;
  width: 100%;
  max-width: 113.7rem;
  height: 11.6rem;
  margin: 0 auto;

  border-bottom: 1px solid ${({ theme }) =>  theme.COLORS.STROKE_GRAY};

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 6.4rem;
  //padding: 0 6.4rem;

  > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.PINK};
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  color: ${({theme}) => theme.COLORS.WHITE};

  > img {
    width: 6.4rem;
    height: 6.4rem; 
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.STROKE_GRAY};
    
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 2.4rem;
    font-size: 1.4rem;

    > strong {
      font-weight: 700;
    }

    > a {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      align-self: flex-end;
    }
  }
`;