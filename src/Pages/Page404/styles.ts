import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.header`
  margin-top: 5%;

  h1 {
    font-size: 10rem;
    font-weight: 700;
  }
`;

export const Footer = styled.footer`
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;
