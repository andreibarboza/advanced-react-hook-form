import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';

import * as SC from './styles';

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button = (props: PropsWithChildren<Props>) => {
  const { children } = props;
  return (
    <SC.Container>
      <button {...props}>{children}</button>
    </SC.Container>
  );
};
