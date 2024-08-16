import React from 'react';
import {Card, CardContent, Typography, Box, Avatar} from '@mui/material';

interface Props {
  author: string | null,
  message: string,
  image: string | null,
}

const OneMessage: React.FC<Props> = ({author, message, image}) => {
  return (
    <Card sx={{ maxWidth: 500, margin: 'auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {image && (
        <Box
          component="img"
          sx={{ width: '100%', height: 'auto', maxHeight: 200, objectFit: 'cover' }}
          alt="Image"
          src={image}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {message}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2, mt: 'auto' }}>
        <Avatar aria-label="contact">
          {author ? author[0] : 'A'}
        </Avatar>
        <Typography variant="body2" sx={{ ml: 2 }}>
          {author || 'Anonymous'}
        </Typography>
      </Box>
    </Card>
  );
};

export default OneMessage;
