import {createAsyncThunk} from '@reduxjs/toolkit';
import {Message, MessageType} from '../../types';
import axiosApi from '../../axiosApi';

export const fetchMessages = createAsyncThunk<Message[]>(
  'messages/fetchAll',
  async () => {
    const {data: messages} = await axiosApi.get<Message[]>('/messages');
    return messages;
  });

export const createMessage = createAsyncThunk<void, MessageType>(
  'messages/create',
  async (messageData) => {
    const formData = new FormData();
    if (messageData.author) {
      formData.append('author', messageData.author);
    }
    formData.append('message', messageData.message);

    if (messageData.image) {
      formData.append('image', messageData.image);
    }

    await axiosApi.post('/messages', formData);
  });