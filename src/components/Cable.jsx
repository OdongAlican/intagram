/* eslint-disable react/prop-types */

import React from 'react';
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({ conversations, handleReceivedMessage }) => (
  <div className="bg-info">
    {
            conversations.map(conversation => (
              <ActionCable
                key={conversation.id}
                channel={{
                  channel: 'MessagingsChannel',
                  conversation: conversation.id,
                }}
                onReceived={handleReceivedMessage}
              />
            ))
        }
  </div>
);

export default Cable;
