import styled from 'styled-components';
import theme from '../../Global/colors';

export const ButtonAction = styled.button`
  background: ${theme.colors.button};
  border: 5px solid ${theme.colors.button};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;
export const Text = styled.span`
  margin-left: 5px;
  color: ${theme.colors.white};
  font-size: 18px;
  font-weight: 500;
`;
