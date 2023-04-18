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

import { ReactComponent as Map } from '@assets/map.svg';
import { ReactComponent as Phone } from '@assets/phone.svg';
import { ReactComponent as Edit } from '@assets/edit.svg';
import { ReactComponent as Trash } from '@assets/trash.svg';
import { ReactComponent as Arrow } from '@assets/arrow.svg';

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
      <SC.ContainterTop>
        <Edit
          onClick={() =>
            dispatch(
              setModalContacts({
                isOpen: true,
                type: 'edit',
                data: contact,
              })
            )
          }
        />
        <Trash
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
        />
      </SC.ContainterTop>
      <SC.ContainerMiddle>
        <SC.Initial>{contact.name.substring(0, 1).toUpperCase()}</SC.Initial>
        <div>
          <div className="name">
            {contact.name} {contact.lastname}
          </div>
          <div className="telephone">{contact.telephones[0].telephone}</div>
          <SC.ContainerBadge>
            <div className="badge">
              <Phone />
              <div>Telefones cadastrados:</div>
              <b>{contact.telephones.length}</b>
            </div>
          </SC.ContainerBadge>
          <SC.ContainerBadge>
            <div className="badge">
              <Map />
              <div>Endereços cadastrados:</div>
              <b>{contact.address.length}</b>
            </div>
          </SC.ContainerBadge>
        </div>
      </SC.ContainerMiddle>
      <SC.Footer
        open={showDetails}
        onClick={() => setShowDetails(!showDetails)}
      >
        <span>Ver detalhes</span> <Arrow />
      </SC.Footer>
      {showDetails && <Details contact={contact} />}
    </SC.ContainerContactList>
  );
};
