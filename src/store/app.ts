import { useDispatch } from 'react-redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import contacts from './reducers/contacts';
import visuals from './reducers/visuals';

const reducer = combineReducers({
  contacts,
  visuals,
});
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
