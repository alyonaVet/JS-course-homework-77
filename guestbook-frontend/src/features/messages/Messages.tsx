import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectMessages, selectMessagesFetching} from './messagesSlice';
import {Box, Grid} from '@mui/material';
import OneMessage from './components/OneMessage';
import {useEffect} from 'react';
import {fetchMessages} from './messagesThunks';
import Spinner from '../../UI/Spinner/Spinner';

const Messages = () => {
  const messages = useAppSelector(selectMessages);
  const dispatch = useAppDispatch();
  const messagesLoading = useAppSelector(selectMessagesFetching);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={3}>
        {messagesLoading ? (
          <Spinner />
        ) : (
          messages.map((message) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={message.id}>
              <OneMessage
                author={message.author}
                message={message.message}
                image={message.image}
              />
            </Grid>
          )))}
      </Grid>
    </Box>
  );
};

export default Messages;