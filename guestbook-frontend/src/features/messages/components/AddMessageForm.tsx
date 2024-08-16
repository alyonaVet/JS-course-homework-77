import React, {ChangeEvent, useState} from 'react';
import {Button, Grid, OutlinedInput, TextField} from '@mui/material';
import {MessageType} from '../../../types';
import FileInput from '../../../UI/FileInput/FileInput';

interface Props {
  onSubmit: (message: MessageType) => void;
}

const AddMessageForm: React.FC<Props> = ({onSubmit}) => {

  const [messageData, setMessageData] = useState<MessageType>({
    author: null,
    message: '',
    image: null,
  });

  const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setMessageData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    const value = files && files[0] ? files[0] : null;

    setMessageData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({...messageData});

    setMessageData({
      author: null,
      message: '',
      image: null,
    });
  };

  return (
    <Grid container direction="column" spacing={2} component="form" onSubmit={onFormSubmit}>
      <Grid item>
        <TextField
          label="Enter your message"
          id="message"
          name="message"
          value={messageData.message}
          onChange={onFieldChange}
          required
          multiline
          rows={3}
          fullWidth
          margin="dense"
        />
      </Grid>
      <Grid item container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <OutlinedInput
            name="author"
            placeholder="Enter your name"
            value={messageData.author || ''}
            onChange={onFieldChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <FileInput
            label="Image"
            name="image"
            onChange={onFileInputChange}/>
        </Grid>
      </Grid>
      <Grid item>
        <Button variant="contained" type="submit">Send</Button>
      </Grid>
    </Grid>
  );
};

export default AddMessageForm;