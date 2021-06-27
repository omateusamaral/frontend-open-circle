import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FiMail, FiBookmark, FiUser, FiPhone } from 'react-icons/fi';
import { toast } from 'react-toastify';
import theme from '../../Global/colors';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

import {
  Container,
  Header,
  Content,
  ButtonContainer,
  FormContainer,
} from './styles';
import api from '../../services';

type Props = {
  id: string;
};
export default function CreateUser() {
  const [contract, setContract] = useState('');
  const [document, setDocument] = useState('');
  const [username, setUsername] = useState('');
  const [occupation, setOccupation] = useState('');
  const [email, setEmail] = useState('');
  const [telefone1, setTelefone1] = useState('');
  const [telefone2, setTelefone2] = useState('');
  const { id } = useParams<Props>();

  useEffect(() => {
    if (!id) {
      return;
    }
    async function getUser() {
      await api
        .get(`/get/user/${id}`)
        .then((response) => {
          setContract(response.data.contract);
          setDocument(response.data.document);
          setUsername(response.data.username);
          setOccupation(response.data.occupation);
          setEmail(response.data.email);
          setTelefone1(response.data.telefone1);
          setTelefone2(response.data.telefone2);
        })
        .catch((error) => {
          error.response.data.errors.map((err: string) => toast.error(err));
        });
    }
    getUser();
  }, [id]);

  const history = useHistory();
  async function handleSubmit() {
    try {
      if (id) {
        api
          .put(`/update/user/${id}`, {
            document,
            contract,
            username,
            occupation,
            email,
            telefone1,
            telefone2,
          })
          .then((response) => {
            toast.success(response.data);
            history.push('/');
          })
          .catch((error) => {
            error.response.data.errors.map((err: string) => toast.error(err));
          });
      } else {
        api
          .post('/create', {
            document,
            contract,
            username,
            occupation,
            email,
            telefone1,
            telefone2,
          })
          .then((response) => {
            toast.success(response.data);
            history.push('/');
          })
          .catch((error) => {
            error.response.data.errors.map((err: string) => toast.error(err));
          });
      }
    } catch (error) {
      toast.error('erro');
    }
  }
  return (
    <Container>
      <Content>
        <Header>
          <h1>{id ? 'Editar Usuário' : 'Novo Usuário'}</h1>
        </Header>
        <FormContainer>
          <Input
            placeholder="Regime *"
            iconName={<FiBookmark size={24} color={theme.colors.icons} />}
            maxlength={3}
            mask="text"
            maskChange={(text: string) => setContract(text)}
            value={contract}
            type="text"
          />
          <Input
            placeholder="CPF/CNPJ *"
            iconName={<FiUser size={24} color={theme.colors.icons} />}
            mask="cpfcpnj"
            maskChange={(text: string) => setDocument(text)}
            value={document}
            maxlength={18}
            type="text"
          />

          <Input
            placeholder="Nome *"
            iconName={<FiUser size={24} color={theme.colors.icons} />}
            maxlength={20}
            mask="text"
            value={username}
            maskChange={(text: string) => setUsername(text)}
            type="text"
          />

          <Input
            placeholder="Função *"
            iconName={<FiUser size={24} color={theme.colors.icons} />}
            mask="text"
            value={occupation}
            maskChange={(text: string) => setOccupation(text)}
            type="text"
          />

          <Input
            placeholder="E-mail *"
            iconName={<FiMail size={24} color={theme.colors.icons} />}
            mask="text"
            value={email}
            maskChange={(text: string) => setEmail(text)}
            type="email"
          />

          <Input
            placeholder="Telefone 1 *"
            iconName={<FiPhone size={24} color={theme.colors.icons} />}
            mask="phone"
            maskChange={(text: string) => setTelefone1(text)}
            maxlength={16}
            value={telefone1}
            type="text"
          />

          <Input
            placeholder="Telefone 2"
            iconName={<FiPhone size={24} color={theme.colors.icons} />}
            mask="phone"
            maskChange={(text: string) => setTelefone2(text)}
            value={telefone2}
            maxlength={16}
            type="text"
          />
          <ButtonContainer>
            <Button title="Cadastrar" needIcon={false} onclick={handleSubmit} />
          </ButtonContainer>
        </FormContainer>
      </Content>
    </Container>
  );
}
