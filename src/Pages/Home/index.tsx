import React from 'react';
import { Link } from 'react-router-dom';
import { FiUserPlus } from 'react-icons/fi';
import Button from '../../Components/Button';
import TableRow from '../../Components/TableRow';
import TableHeader from '../../Components/TableHeader';
import theme from '../../Global/colors';
import {
  Container,
  Header,
  TitleContainer,
  Content,
  Table,
  Theader,
  TableContainer,
  Tbody,
  Footer,
  Title,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Content>
        <Header>
          <TitleContainer>
            <Title>GERENCIAR USUÁRIOS</Title>
          </TitleContainer>
        </Header>
        <TableContainer>
          <Table>
            <Theader>
              <tr>
                <TableHeader title="" />
                <TableHeader title="" />

                <TableHeader title="CPF/CNPJ" />
                <TableHeader title="Regime" />
                <TableHeader title="Nome" />
                <TableHeader title="Função" />
                <TableHeader title="E-mail" />
                <TableHeader title="telefone1" />
                <TableHeader title="telefone2" />
                <TableHeader title="" />
                <TableHeader title="" />
              </tr>
            </Theader>
            <Tbody>
              <TableRow />
            </Tbody>
          </Table>
          <Footer>
            <Link to="user/create" style={{ textDecoration: 'none' }}>
              <Button
                needIcon
                title="Adicionar usuário"
                iconName={
                  <FiUserPlus color={`${theme.colors.white}`} size={24} />
                }
              />
            </Link>
          </Footer>
        </TableContainer>
      </Content>
    </Container>
  );
}
