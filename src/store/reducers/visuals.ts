import { IContact } from '@customTypes/contacts';
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    isLoading: true,
    modalContacts: {
      isOpen: false,
      type: 'create',
      data: [] as unknown as IContact,
    },
    notification: {
      show: false,
      msg: '',
      type: '',
    },
    alert: {
      isOpen: false,
      title: '',
      text: '',
      submit: async () => [],
    },
  },
  reducers: {
    setIsLoading(state, data) {
      state.isLoading = data.payload;
    },

    setModalContacts(state, data) {
      state.modalContacts = data.payload;
    },

    setNotification(state, data) {
      state.notification = data.payload;
    },

    setAlert(state, data) {
      state.alert = data.payload;
    },

    setResetAlert(state) {
      state.alert = {
        isOpen: false,
        title: '',
        text: '',
        submit: async () => [],
      };
    },
  },
});

export const {
  setModalContacts,
  setNotification,
  setAlert,
  setResetAlert,
  setIsLoading,
} = slice.actions;
export default slice.reducer;
