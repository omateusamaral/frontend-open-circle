import React, { useState, useEffect } from 'react';
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
export default function ViewUser() {
  const [contract, setContract] = useState('');
  const [document, setDocument] = useState('');
  const [username, setUsername] = useState('');
  const [occupation, setOccupation] = useState('');
  const [email, setEmail] = useState('');
  const [telefone1, setTelefone1] = useState('');
  const [telefone2, setTelefone2] = useState('');
  const { id } = useParams<Props>();
  const history = useHistory();
  useEffect(() => {
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
  }, []);
  function handleGoBack() {
    history.push('/');
  }
  return (
    <Container>
      <Content>
        <Header>
          <h1>{username}</h1>
        </Header>
        <FormContainer>
          <Input
            placeholder="Regime *"
            iconName={<FiBookmark size={24} color={theme.colors.icons} />}
            value={contract}
            maxlength={3}
            type="text"
          />
          <Input
            placeholder="CPF/CNPJ *"
            iconName={<FiUser size={24} color={theme.colors.icons} />}
            maxlength={18}
            value={document}
            type="text"
          />

          <Input
            placeholder="Nome *"
            iconName={<FiUser size={24} color={theme.colors.icons} />}
            value={username}
            maxlength={15}
            type="text"
          />

          <Input
            placeholder="Função *"
            iconName={<FiUser size={24} color={theme.colors.icons} />}
            value={occupation}
            maxlength={15}
            type="text"
          />

          <Input
            placeholder="E-mail *"
            iconName={<FiMail size={24} color={theme.colors.icons} />}
            value={email}
            type="email"
          />

          <Input
            placeholder="Telefone 1 *"
            iconName={<FiPhone size={24} color={theme.colors.icons} />}
            value={telefone1}
            type="text"
          />

          <Input
            placeholder="Telefone 2"
            iconName={<FiPhone size={24} color={theme.colors.icons} />}
            value={telefone2}
            maxlength={16}
            type="text"
          />
          <ButtonContainer>
            <Button title="Voltar" needIcon={false} onclick={handleGoBack} />
          </ButtonContainer>
        </FormContainer>
      </Content>
    </Container>
  );
}
