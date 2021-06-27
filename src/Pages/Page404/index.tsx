import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import theme from '../../Global/colors';
import Button from '../../Components/Button';
import { Container, Header, Footer } from './styles';

export default function Page404() {
  return (
    <Container>
      <Header>
        <h1>404</h1>
      </Header>
      <Footer>
        <p>Está página não existe 😟😟</p>
      </Footer>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button
          title="Voltar"
          needIcon
          iconName={<FiArrowLeft size={24} color={theme.colors.white} />}
        />
      </Link>
    </Container>
  );
}
