import { IContact } from '@customTypes/contacts';
import { ReactComponent as Map } from '@assets/map.svg';
import { ReactComponent as Phone } from '@assets/phone.svg';
import { ReactComponent as Mobile } from '@assets/mobile.svg';
import * as SC from './styles';

interface IContactList {
  contact: IContact;
}

export const Details = ({ contact }: IContactList) => {
  return (
    <SC.ContainerDetails>
      <div>
        <div className="title">
          <Map /> {contact.address.length === 1 ? 'Endereço' : 'Endereços'}
        </div>
        <SC.ContainerAddress>
          {contact.address.map((address, index) => (
            <div className="address" key={index}>
              <div className="subtitle">
                Endereço {index === 0 ? 'Principal' : index + 1}
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
      </div>

      <div>
        <div className="title">
          {contact.address.length === 1 ? 'Telefone' : 'Telefones'}
        </div>
        <SC.ContainerTelephones>
          {contact.telephones.map(({ telephone, type }, index) => (
            <SC.SingleTelephone key={index}>
              {type === 'celphone' ? <Mobile /> : <Phone />}{' '}
              <span>{telephone}</span>
            </SC.SingleTelephone>
          ))}
        </SC.ContainerTelephones>
      </div>
    </SC.ContainerDetails>
  );
};
