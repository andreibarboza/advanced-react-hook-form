import { IContact } from '@customTypes/contacts';
import { Options, requestAPI } from '../api';

export const getAllContacts = () => {
  const options: Options = {
    url: `http://localhost:3000/contacts`,
    method: 'GET',
  };

  return requestAPI(options);
};

export const createContact = (data: Omit<IContact, 'id'>) => {
  const options: Options = {
    url: `http://localhost:3000/contacts`,
    method: 'POST',
    data,
  };

  return requestAPI(options);
};

export const editContact = (data: IContact, id: string) => {
  const options: Options = {
    url: `http://localhost:3000/contacts/${id}`,
    method: 'PATCH',
    data,
  };

  return requestAPI(options);
};

export const deleteContact = (id: string) => {
  const options: Options = {
    url: `http://localhost:3000/contacts/${id}`,
    method: 'DELETE',
  };

  return requestAPI(options);
};
