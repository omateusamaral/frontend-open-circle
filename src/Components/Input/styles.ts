import styled from 'styled-components';
import theme from '../../Global/colors';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
`;

export const InputUser = styled.input`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  color: ${theme.colors.texts};
  padding: 15px;
  border: 1px solid;
  border-radius: 3px;

  font-size: 16px;
  font-weight: 500;
  border-color: ${theme.colors.icons};
  &:focus {
    outline: none;
  }
`;
