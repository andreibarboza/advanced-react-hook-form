import { useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from '@hooks/useDebounce';
import { RootState } from '@store/app';
import { setIsLoading } from '@store/reducers/visuals';
import { Response } from '@services/api';
import { Services } from '@services/index';
import { IContact } from '@customTypes/contacts';
import { setContacts } from '@store/reducers/contacts';
import ContactList from './components/ContactList';

import * as SC from './styles';

interface IContactBody {
  search: string;
}

export const ContactBody = ({ search }: IContactBody) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.visuals.isLoading);
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const debouncedValue = useDebounce(search, 500);

  const foundedContacts =
    debouncedValue.length !== 0
      ? contacts?.filter(
          (contact: any) =>
            contact.name
              .concat(contact.lastname)
              .toLowerCase()
              .trim()
              .includes(debouncedValue.trim().toLowerCase()) ||
            contact.lastname
              .toLowerCase()
              .trim()
              .includes(debouncedValue.trim().toLowerCase())
        )
      : contacts;

  async function getContacts() {
    const { response }: Response = await Services.contacts.getAllContacts();

    if (response.status >= 400) {
      return;
    }

    dispatch(setContacts(response.data));
    dispatch(setIsLoading(false));
  }

  useEffect(() => {
    getContacts();
  }, []);

  const BodyContent = useMemo(() => {
    if (isLoading && contacts.length === 0) return;

    if (foundedContacts.length !== 0) {
      return foundedContacts.map((contact: IContact) => (
        <ContactList key={contact.id} contact={contact} />
      ));
    }

    if (contacts.length !== 0 && foundedContacts.length === 0) {
      return <SC.EmptyMessage>Nenhum usuário encontrado</SC.EmptyMessage>;
    }

    if (contacts.length === 0) {
      return <SC.EmptyMessage>Nenhum usuário criado</SC.EmptyMessage>;
    }
  }, [isLoading, contacts, foundedContacts]);

  return <SC.ContainerBody>{BodyContent}</SC.ContainerBody>;
};
