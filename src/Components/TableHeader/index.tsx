import React from 'react';

import { Theader } from './styles';

type Props = {
  title: string;
};
export default function TableHeader({ title }: Props) {
  return <Theader scope="col">{title}</Theader>;
}
