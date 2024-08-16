import {Container, Typography} from '@mui/material';
import AddMessageForm from './components/AddMessageForm';
import {MessageType} from '../../types';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {createMessage, fetchMessages} from './messagesThunks';
import Messages from './Messages';
import {selectMessageCreating} from './messagesSlice';

const MessagePage = () => {
  const dispatch = useAppDispatch();
  const isCreating = useAppSelector(selectMessageCreating);

  const onFormSubmit = async (messageData: MessageType) => {
    await dispatch(createMessage(messageData));
    await dispatch(fetchMessages());
  };

  return (
    <Container component="main">
      <Typography variant="h5" sx={{mb: 2}}>
        Here you can write your message:
      </Typography>
      <AddMessageForm onSubmit={onFormSubmit} isLoading={isCreating}/>
      <Typography variant="h5" sx={{my: 2}}>
        Hear what our guests say:
      </Typography>
      <Messages />
    </Container>
  );
};

export default MessagePage;