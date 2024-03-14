import styled from 'styled-components';
import backgroundImg from '../../assets/moviechair.png'


export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({theme}) => theme.COLORS.PINK};
    
  }

  > h2 {
    font-size: 2.4rem;
    margin-top: 4.8rem;
    margin-bottom: 2.4rem;
    align-self: start;
  }

  > p {
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    align-self: flex-start;
  }

  > div {
    flex: 0;
  }

  > a {
    margin-top: 4.2rem;
    color: ${({theme}) => theme.COLORS.PINK};
  }
`;

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;