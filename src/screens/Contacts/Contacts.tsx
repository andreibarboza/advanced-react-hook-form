import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '@store/app';
import { Services } from '@services/index';
import { Response } from '@services/api';

import * as SC from './styles';

export const Contacts = () => {
  const name = useSelector((state: RootState) => state.contacts.name);

  async function getCep() {
    const response: Response = await Services.viacep.getCep('12604180');

    console.log(response);
  }

  useEffect(() => {
    getCep();
  }, []);

  return (
    <SC.ScreenContactsContainer>Meu nome é: {name}</SC.ScreenContactsContainer>
  );
};
