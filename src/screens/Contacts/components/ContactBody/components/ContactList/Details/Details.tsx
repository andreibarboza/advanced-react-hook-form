import { IContact } from '@customTypes/contacts';
import { ReactComponent as Map } from '@assets/map.svg';
import { ReactComponent as Phone } from '@assets/phone.svg';
import * as SC from './styles';

interface IContactList {
  contact: IContact;
}

export const Details = ({ contact }: IContactList) => {
  return (
    <SC.ContainerDetails>
      <SC.ContainerAddress>
        {contact.address.map((address, index) => (
          <div className="address" key={index}>
            <div className="title">
              <Map /> Endereço {index === 0 ? 'Principal' : index + 1}
            </div>
            <div>
              <span className="semi-bold">CEP</span>: {address.zipcode}
            </div>
            <div>
              <span className="semi-bold">Cidade</span>: {address.city}
            </div>
            <div>
              <span className="semi-bold">Bairro</span>: {address.district}
            </div>
            <div>
              <span className="semi-bold">Estado</span>: {address.state}
            </div>
            {address.complement && (
              <div>
                <span className="semi-bold">Complemento</span>:{' '}
                {address.complement}
              </div>
            )}
            {address.number && (
              <div>
                <span className="semi-bold">Número</span>: {address.number}
              </div>
            )}
          </div>
        ))}
      </SC.ContainerAddress>

      <SC.ContainerTelephones>
        <div className="title">
          <Phone /> Contato
        </div>

        {contact.telephones.map(({ telephone, type }, index) => (
          <SC.SingleTelephone key={index}>
            <span>{telephone}</span>
          </SC.SingleTelephone>
        ))}
      </SC.ContainerTelephones>
    </SC.ContainerDetails>
  );
};
