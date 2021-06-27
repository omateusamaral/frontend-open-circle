/* eslint-disable react/require-default-props */
import React from 'react';
import { IconBaseProps } from 'react-icons';
import { ButtonAction, Text } from './styles';

type Props = {
  title: string;
  iconName?: IconBaseProps;
  needIcon: boolean;
  onclick?: () => void;
};
export default function Button({ title, needIcon, iconName, onclick }: Props) {
  return (
    <ButtonAction onClick={onclick}>
      {needIcon && iconName}

      <Text>{title}</Text>
    </ButtonAction>
  );
}
