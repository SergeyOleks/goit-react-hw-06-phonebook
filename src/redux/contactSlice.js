import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addNumber: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    delNumber(state, action) {
      const index = state.filter(contact => contact.id !== action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addNumber, delNumber } = contactSlice.actions;
export const contactsReduser = contactSlice.reducer;
