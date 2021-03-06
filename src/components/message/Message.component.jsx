import { Card, CardContent, Typography } from '@material-ui/core';
import React, { forwardRef } from 'react';

import './Message.styles.css';

const Message = forwardRef(({loggedUser, message}, ref) => {

  const isUser = loggedUser === message.username;

  return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
      <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
          >
            {!isUser && `${message.username || 'Unknown user'}:`} {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
})

export default Message;