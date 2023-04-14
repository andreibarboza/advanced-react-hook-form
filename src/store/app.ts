import { useDispatch } from 'react-redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import contacts from './reducers/contacts';


const reducer = combineReducers({
  contacts,
});
const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;