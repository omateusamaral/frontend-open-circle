/* eslint-disable react/require-default-props */
import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Button, Text } from './styles';

type Props = {
  title?: string;
  iconName: IconBaseProps;
  styleBtn: React.CSSProperties;
  click?: () => void;
};
export default function ButtonTable({
  title,
  iconName,
  styleBtn,
  click,
}: Props) {
  return (
    <Button style={styleBtn} onClick={click}>
      {iconName}
      <Text>{title}</Text>
    </Button>
  );
}
