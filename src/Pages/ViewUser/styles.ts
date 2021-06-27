import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const Content = styled.main`
  margin-top: 10%;
  background-color: transparent;
  margin: 0 3rem 0 3rem;
  margin-top: 10%;
  -webkit-box-shadow: 6px 14px 17px -1px rgba(0, 0, 0, 0.38);
  box-shadow: 6px 14px 17px -1px rgba(0, 0, 0, 0.38);
`;
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 10%;

  h1 {
    font-size: 2.1rem;
    font-weight: 700;
  }
`;
export const ButtonContainer = styled.div`
  margin: 2%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 3rem;
`;
