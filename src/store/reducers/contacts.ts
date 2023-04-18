import { createSlice, current } from '@reduxjs/toolkit';
import { IContact } from '@customTypes/contacts';

const groupNames = (contact: IContact[]) => {
  const map = contact.reduce((accumulator: any, actualValue: any) => {
    const char = actualValue.name.charAt(0).toUpperCase();
    accumulator[char] = [].concat(accumulator[char] || [], actualValue);
    return accumulator;
  }, {});
  const res = Object.keys(map).map((el) => ({
    letter: el,
    byName: map[el],
  }));

  const sortedContatcs = res.sort((a, b) => a.letter.localeCompare(b.letter));

  return sortedContatcs;
};

const slice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      {
        letter: '',
        byName: [] as IContact[],
      },
    ],
  },
  reducers: {
    setContacts(state, data) {
      state.contacts = groupNames(data.payload);
    },
    setConcatContact(state, data) {
      const onlyContacts: IContact[] = [];

      current(state.contacts).map((item) =>
        item.byName.map((contact) => onlyContacts.push(contact))
      );

      onlyContacts.push(data.payload);

      state.contacts = groupNames(onlyContacts);
    },
    setUpdateContact(state, data) {
      const onlyContacts: IContact[] = [];

      current(state.contacts).map((item) =>
        item.byName.map((contact) =>
          onlyContacts.push(
            contact.id === data.payload.id ? data.payload : contact
          )
        )
      );

      state.contacts = groupNames(onlyContacts);
    },
    setRemoveContact(state, data) {
      const onlyContacts: IContact[] = [];

      current(state.contacts).map((item) =>
        item.byName.filter(
          (contact) => contact.id !== data.payload && onlyContacts.push(contact)
        )
      );

      state.contacts = groupNames(onlyContacts);
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
