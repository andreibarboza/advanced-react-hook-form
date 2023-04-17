import { createSlice } from '@reduxjs/toolkit';
import { IContact } from '@customTypes/contacts';

interface ISortName {
  name: string;
}

const slice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [] as IContact[],
  },
  reducers: {
    setContacts(state, data) {
      const sortContacts = data.payload.sort((a: ISortName, b: ISortName) =>
        a.name.localeCompare(b.name)
      );

      state.contacts = sortContacts;
    },
    setConcatContact(state, data) {
      const contacts = [...state.contacts];
      contacts.push(data.payload);

      const sortContacts = contacts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      state.contacts = sortContacts;
    },
    setUpdateContact(state, data) {
      const updatededContact = state.contacts.map((contact: { id: string }) =>
        contact.id === data.payload.id ? data.payload : contact
      );

      const sortContacts = updatededContact.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      state.contacts = sortContacts;
    },
    setRemoveContact(state, date) {
      const removedContact = state.contacts.filter(
        (contact: { id: string }) => contact.id !== date.payload
      );

      state.contacts = removedContact;
    },
  },
});

export const {
  setContacts,
  setConcatContact,
  setUpdateContact,
  setRemoveContact,
} = slice.actions;
export default slice.reducer;
