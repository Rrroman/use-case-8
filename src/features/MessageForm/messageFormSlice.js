import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
};

let previousId = 0;

export const messageFormSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push({ id: (previousId += 1), ...action.payload });
      alert(`You have added message: ${action.payload.message}`);
    },
  },
});

export const { addMessage } = messageFormSlice.actions;

export default messageFormSlice.reducer;
