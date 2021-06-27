/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { TiDeleteOutline, TiEdit, TiZoom } from 'react-icons/ti';
import UsersInterface from '../../Interfaces/usersList';
import ButtonTable from '../ButtonTable';
import theme from '../../Global/colors';
import { TrContainer } from './styles';
import TableData from '../TableData';
import api from '../../services';
import Button from '../Button';
import Input from '../Input';

export default function TableRow() {
  const [users, setUsers] = useState<UsersInterface[]>([]);

  function handleDelete(userId: string) {
    try {
      api
        .delete(`/delete/${userId}`)
        .then((response) => {
          toast.success(response.data);
          getUsers();
        })
        .catch((error) => {
          error.response.data.errors.map((err: string) => toast.error(err));
        });
    } catch (error) {
      toast.error('erro');
    }
  }

  function handleDeleteSelectedUser() {
    const checkboxed = document.querySelectorAll('.usersid:checked');

    checkboxed.forEach((element) => {
      try {
        api
          .delete(`/delete/${element.id}`)
          .then((response) => {
            toast.success(response.data);
            getUsers();
          })
          .catch((error) => {
            error.response.data.errors.map((err: string) => toast.error(err));
          });
      } catch (error) {
        toast.error('Erro ao deletar');
      }
    });
  }
  async function getUsers() {
    const result = await api.get('/');
    setUsers(result.data);
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      {users.length === 0 ? (
        <TrContainer>
          <td style={{ width: '100%' }}>
            <h1>sem usuários registrados</h1>
          </td>
        </TrContainer>
      ) : (
        users.map((user) => {
          return (
            <TrContainer key={user.id}>
              <TableData>
                <Input
                  type="checkbox"
                  className="usersid"
                  name="usersid"
                  id={user.id}
                />
              </TableData>

              <TableData>
                <Link
                  to={`user/${user.id}/view`}
                  style={{ textDecoration: 'none' }}
                >
                  <ButtonTable
                    styleBtn={{
                      borderColor: theme.colors.secondary,
                      color: theme.colors.secondary,
                    }}
                    iconName={
                      <TiZoom color={`${theme.colors.primary}`} size={24} />
                    }
                  />
                </Link>
              </TableData>

              <TableData title={user.document} />
              <TableData title={user.contract} />
              <TableData title={user.username} />
              <TableData title={user.occupation} />
              <TableData title={user.email} />
              <TableData title={user.telefone1} />
              <TableData
                title={
                  user.telefone2.length > 0
                    ? user.telefone2
                    : 'Sem segundo telefone'
                }
              />
              <TableData>
                <Link
                  to={`user/${user.id}/edit`}
                  style={{ textDecoration: 'none' }}
                >
                  <ButtonTable
                    styleBtn={{
                      borderColor: theme.colors.secondary,
                      color: theme.colors.secondary,
                    }}
                    title="Editar"
                    iconName={
                      <TiEdit color={`${theme.colors.primary}`} size={24} />
                    }
                  />
                </Link>
              </TableData>
              <TableData>
                <ButtonTable
                  click={() => {
                    if (window.confirm('Tem certeza que deseja deletar?'))
                      handleDelete(user.id);
                  }}
                  styleBtn={{
                    borderColor: theme.colors.delete,
                    color: theme.colors.delete,
                  }}
                  title="Excluir"
                  iconName={
                    <TiDeleteOutline
                      color={`${theme.colors.delete}`}
                      size={24}
                    />
                  }
                />
              </TableData>
            </TrContainer>
          );
        })
      )}
      {users.length > 0 && (
        <tr>
          <td>
            <Button
              title="Excluir todos"
              needIcon={false}
              onclick={() => {
                if (
                  window.confirm(
                    'Tem certeza que deseja deletar os selecionados?'
                  )
                )
                  handleDeleteSelectedUser();
              }}
            />
          </td>
        </tr>
      )}
    </>
  );
}
