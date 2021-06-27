/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { InputUser, InputContainer } from './styles';
import { maskPhone, maskCPFCPNJ } from '../../utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconName?: IconBaseProps;
  maxlength?: number;
  mask?: 'cpfcpnj' | 'phone' | 'text';
  maskChange?: any;
}
export default function Input({
  iconName,
  maxlength,
  mask,
  maskChange,
  ...rest
}: InputProps) {
  function handleChange(text: string) {
    if (mask === 'phone') {
      const textValue = maskPhone(text);
      maskChange(textValue);
    }
    if (mask === 'cpfcpnj') {
      const textValue = maskCPFCPNJ(text);
      maskChange(textValue);
    }
    if (mask === 'text') {
      maskChange(text);
    }
  }
  return (
    <InputContainer>
      {iconName}
      <InputUser
        {...rest}
        {...mask}
        {...maskChange}
        maxLength={maxlength}
        onChange={(text) => handleChange(text.target.value)}
      />
    </InputContainer>
  );
}
