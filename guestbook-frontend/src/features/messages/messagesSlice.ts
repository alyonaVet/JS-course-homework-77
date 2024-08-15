import {createSlice} from '@reduxjs/toolkit';
import {Message} from '../../types';

export interface MessagesState {
  messages: Message[];
}

const initialState: MessagesState = {
  messages: [],

};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
});

export const messagesReducer = messagesSlice.reducer;
