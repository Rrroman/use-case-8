import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [{ firstName: '', secondName: '', email: '', message: '' }],
};

export const messageFormSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action);
      alert(`You have added message: ${action.payload.message}`);
    },
  },
});

export const { addMessage } = messageFormSlice.actions;

export default messageFormSlice.reducer;
