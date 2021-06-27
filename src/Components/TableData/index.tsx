/* eslint-disable react/require-default-props */
import React from 'react';

import { TableDataContainer } from './styles';

type props = {
  children?: React.ReactNode;
  title?: string;
};
export default function TableData({ children, title }: props) {
  return (
    <TableDataContainer>
      {title}
      {children}
    </TableDataContainer>
  );
}
