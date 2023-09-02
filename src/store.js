import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './features/MessageForm/messageFormSlice';

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
  },
});
