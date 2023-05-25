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
      ? contacts?.map((item) => {
          const object: { byName: IContact[]; letter: string } = {
            byName: [],
            letter: '',
          };

          object.byName = item.byName.filter(
            (contact) =>
              contact.name
                .toLowerCase()
                .trim()
                .includes(debouncedValue.trim().toLowerCase()) ||
              contact.lastname
                .toLowerCase()
                .trim()
                .includes(debouncedValue.trim().toLowerCase())
          );
          object.letter = item.letter;

          return object;
        })
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
    const haveNoContact = contacts.every(({ byName }) => byName.length === 0);

    if (isLoading && haveNoContact) return;

    if (haveNoContact) {
      return <SC.EmptyMessage>Nenhum usuário criado</SC.EmptyMessage>;
    }

    if (foundedContacts.length !== 0) {
      if (foundedContacts.every(({ byName }) => byName.length === 0)) {
        return <SC.EmptyMessage>Nenhum usuário encontrado</SC.EmptyMessage>;
      }

      return foundedContacts.map(({ letter, byName }) => (
        <SC.ContainerWithLetter key={letter}>
          {byName.length !== 0 && <div className="letter">{letter}</div>}
          <div className="contacts">
            {byName.map((contact: IContact) => (
              <ContactList key={contact.id} contact={contact} />
            ))}
          </div>
        </SC.ContainerWithLetter>
      ));
    }
  }, [isLoading, contacts, foundedContacts]);

  return <SC.ContainerBody>{BodyContent}</SC.ContainerBody>;
};
