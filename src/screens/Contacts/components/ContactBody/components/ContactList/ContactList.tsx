import { IContact } from '@customTypes/contacts';
import * as SC from './styles';
import { useDispatch } from 'react-redux';
import {
  setAlert,
  setIsLoading,
  setModalContacts,
  setNotification,
  setResetAlert,
} from '@store/reducers/visuals';
import { Services } from '@services/index';
import { Response } from '@services/api';
import { setRemoveContact } from '@store/reducers/contacts';
import { useState } from 'react';
import Details from './Details';
import Button from '@components/Button';

interface IContactList {
  contact: IContact;
}

export const ContactList = ({ contact }: IContactList) => {
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState<boolean>(false);

  async function handleDelete() {
    dispatch(setIsLoading(true));

    const { response }: Response = await Services.contacts.deleteContact(
      contact.id
    );

    if (response.status >= 400) {
      dispatch(setIsLoading(false));
      return;
    }

    dispatch(
      setNotification({
        show: true,
        msg: 'Contato foi excluído com sucesso!',
        type: 'success',
      })
    );

    dispatch(setResetAlert());
    dispatch(setRemoveContact(contact.id));
    dispatch(setIsLoading(false));
  }

  return (
    <SC.ContainerContactList>
      <div>
        <SC.ContainerName>
          {contact.name} {contact.lastname}
        </SC.ContainerName>
        <SC.ContainerBadge>
          {contact.telephones[0].telephone}
          {contact.telephones.length !== 1 && (
            <div className="badge">
              <div>Telefones cadastrados:</div>
              <b>{contact.telephones.length}</b>
            </div>
          )}
        </SC.ContainerBadge>
        <SC.ContainerBadge>
          {contact.address[0].city}, {contact.address[0].state}
          {contact.address.length !== 1 && (
            <div className="badge">
              <div>Endereços cadastrados:</div>
              <b>{contact.address.length}</b>
            </div>
          )}
        </SC.ContainerBadge>

        {showDetails && <Details contact={contact} />}
        <SC.ContainerButtons>
          <Button className="sm" onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? 'Ocultar' : 'Ver'} detalhes
          </Button>
          <Button
            className="sm"
            onClick={() =>
              dispatch(
                setModalContacts({
                  isOpen: true,
                  type: 'edit',
                  data: contact,
                })
              )
            }
          >
            Editar contato
          </Button>
          <Button
            className="sm delete"
            onClick={() =>
              dispatch(
                setAlert({
                  isOpen: true,
                  title: 'Atenção!',
                  text: 'Ao excluir o contato você não terá mais acesso a informação do mesmo!',
                  submit: () => handleDelete(),
                })
              )
            }
          >
            Excluir
          </Button>
        </SC.ContainerButtons>
      </div>
    </SC.ContainerContactList>
  );
};
