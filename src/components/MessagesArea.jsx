/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */

import React from 'react';
import NewMessageForm from './NewMessageForm';

const MessagesArea = ({
  conversation: { id, title, messagings },
}) => (
  <div className="messagesArea">
    <h2>{title}</h2>
    <div>{orderedMessages(messagings)}</div>
    <NewMessageForm conversation_id={id} />
  </div>
);

export default MessagesArea;

// helpers

const orderedMessages = messagings => {
  const sortedMessages = messagings.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at),
  );
  return sortedMessages.map(message => <div className=" card bg-info mb-2" key={message.id}>{message.text}</div>);
};
