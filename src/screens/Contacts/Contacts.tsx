import { useState } from 'react';

import ButtonCreate from './components/ButtonCreate';
import ContactBody from './components/ContactBody';
import ContactFormModal from './components/ContactFormModal';

import Alert from '@components/Alert';
import Notification from '@components/Notification';

import { RootState } from '@store/app';
import { useSelector } from 'react-redux';

import { ReactComponent as Search } from '@assets/search.svg';

import * as SC from './styles';

export const Contacts = () => {
  const modal = useSelector((state: RootState) => state.visuals.modalContacts);
  const alert = useSelector((state: RootState) => state.visuals.alert);
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const isLoading = useSelector((state: RootState) => state.visuals.isLoading);
  const [search, setSearch] = useState<string>('');

  return (
    <SC.ScreenContactsContainer>
      <SC.Overlay
        open={modal.isOpen || alert.isOpen || isLoading}
        loading={isLoading}
      >
        {isLoading && <div className="loader" />}
      </SC.Overlay>
      <SC.Header>Contatos</SC.Header>
      {contacts.length !== 0 && (
        <SC.ContainerSearch>
          <div className="input-img">
            <input
              type="text"
              placeholder="Buscar contatos..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search />
          </div>
        </SC.ContainerSearch>
      )}
      <ContactBody search={search} />
      <ContactFormModal />
      <Notification />
      <ButtonCreate />
      <Alert />
    </SC.ScreenContactsContainer>
  );
};
