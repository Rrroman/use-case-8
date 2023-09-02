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
      previousId = previousId + 1;
      state.messages.push({
        id: previousId,
        ...action.payload,
      });
      alert(`You have added message: ${action.payload.message}`);
    },
  },
});

export const { addMessage } = messageFormSlice.actions;

export default messageFormSlice.reducer;
