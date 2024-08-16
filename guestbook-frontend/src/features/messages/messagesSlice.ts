import {createSlice} from '@reduxjs/toolkit';
import {Message} from '../../types';
import {fetchMessages} from './messagesThunks';

export interface MessagesState {
  messages: Message[];
  messagesFetching: boolean;

}

const initialState: MessagesState = {
  messages: [],
  messagesFetching: false,
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.messagesFetching = true;
      })
      .addCase(fetchMessages.fulfilled, (state, {payload: messages}) => {
        state.messagesFetching = false;
        state.messages = messages;
      })
      .addCase(fetchMessages.rejected, (state) => {
        state.messagesFetching = false;
      });
  },
  selectors: {
    selectMessages: (state) => state.messages,
    selectMessagesFetching: (state) => state.messagesFetching,

  }
});

export const messagesReducer = messagesSlice.reducer;

export const {
  selectMessages,
  selectMessagesFetching,
} = messagesSlice.selectors;
