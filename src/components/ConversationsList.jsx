/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import axios from 'axios';
import { API_ROOT } from '../constants';
import NewConversationForm from './NewConversationForm';
import MessagesArea from './MessagesArea';
import Cable from './Cable';
import { headers } from '../utils/api';

class ConversationsList extends React.Component {
    state = {
      conversations: [],
      activeConversation: null,
    };

    componentDidMount = () => {
      try {
        axios.get(`${API_ROOT}/conversations`, headers)
          .then(resp => this.setState({ conversations: resp.data }));
      } catch (error) {
        console.log(error);
      }
    };

    handleClick = id => {
      this.setState({ activeConversation: id });
    };

    handleReceivedConversation = response => {
      const { conversation } = response;
      this.setState({
        conversations: [...this.state.conversations, conversation],
      });
    }

    handleReceivedMessage = response => {
      const { messaging } = response;
      const conversations = [...this.state.conversations];
      const conversation = conversations.find(
        conversation => conversation.id === messaging.conversation_id,
      );

      conversation.messagings = [...conversation.messagings, messaging];
      this.setState({ conversations });
    }

    render = () => {
      const { conversations, activeConversation } = this.state;
      return (
        <div className="conversationsList">
          <ActionCable
            channel={{ channel: 'ConversationsChannel' }}
            onReceived={this.handleReceivedConversation}
          />
          {this.state.conversations.length ? (
            <Cable
              conversations={conversations}
              handleReceivedMessage={this.handleReceivedMessage}
            />
          ) : null}
          <h2>Conversations</h2>
          <ul>{mapConversations(conversations, this.handleClick)}</ul>
          <NewConversationForm />
          {activeConversation ? (
            <MessagesArea
              conversation={findActiveConversation(
                conversations,
                activeConversation,
              )}
            />
          ) : null}
        </div>
      );
    };
}

export default ConversationsList;

// helpers

const findActiveConversation = (conversations, activeConversation) => conversations.find(
  conversation => conversation.id === activeConversation,
);

const mapConversations = (conversations, handleClick) => conversations.map(conversation => (
  <div className="p-2 card bg-secondary mb-2 col-md-2" key={conversation.id} onClick={() => handleClick(conversation.id)}>
    {conversation.title}
  </div>
));
