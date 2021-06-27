import styled from 'styled-components';
import theme from '../../Global/colors';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const Content = styled.div`
  -webkit-box-shadow: 6px 14px 17px -1px rgba(0, 0, 0, 0.38);
  box-shadow: 6px 14px 17px -1px rgba(0, 0, 0, 0.38);
  background-color: transparent;
  margin: 0 3rem 0 3rem;
  margin-top: 5%;
`;
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-image: linear-gradient(
    to right,
    #0e059a,
    #0e0490,
    #0d0385,
    #0c027b,
    #0b0171
  );
`;

export const TitleContainer = styled.div`
  box-shadow: 1px solid #000;
  border: 8px;
  width: 30rem;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TableContainer = styled.div`
  overflow-x: auto;
  background-color: ${theme.colors.white};
  margin: 10px;
`;
export const Table = styled.table`
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;

  border-collapse: collapse;
  border-spacing: 2px;
  border-color: ${theme.colors.icons};
  margin-top: 30px;
`;

export const Theader = styled.thead`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 3px;

  tr {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const Tbody = styled.tbody`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 3px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: row;

  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: ${theme.colors.white};
`;
