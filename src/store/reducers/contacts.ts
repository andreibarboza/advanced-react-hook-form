import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    name: 'Andrei',
  },
  reducers: {
    setName(state, data) {
      state.name = data.payload;
    },
  },
});

export const { setName } = slice.actions;
export default slice.reducer;
