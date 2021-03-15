/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */

import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import axios from 'axios';
import { API_ROOT } from '../constants';
// import NewConversationForm from './NewConversationForm';
import MessagesArea from './MessagesArea';
import Cable from './Cable';
import { headers } from '../utils/api';
import Profileimage from '../Images/icon.png';
import NavBar from './Navbar';

class ConversationsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: [],
      activeConversation: null,
      userId: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

    componentDidMount = async () => {
      try {
        const response = await axios.get(`${API_ROOT}/conversations`, headers);
        this.setState({
          conversations: response.data,
          userId: localStorage.userId,
        });
        console.log(localStorage.token);
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

      this.handleClick = this.handleClick.bind(this);
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
      const { conversations, activeConversation, userId } = this.state;
      return (
        <div className="messaging-section">
          <NavBar />
          <div className="conversationsList-section">
            <div className="left-conversation-section">
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
              <div className="top-header-section">Conversations</div>
              {
            conversations
              .filter(conversation => (
                conversation.reciever_id === parseInt(this.state.userId, 10)
                  || conversation.user_id === parseInt(this.state.userId, 10)))
              .map(conversation => (
                <div
                  className="each-conversation"
                  key={conversation.id}
                  onClick={() => this.handleClick(conversation.id)}
                >
                  <div className="reciever-image">
                    <img src={Profileimage} alt="profile" />
                  </div>
                  <div className="reciever-name">
                    {conversation.title}
                  </div>
                </div>
              ))
          }
              {/* <NewConversationForm /> */}
            </div>
            <div className="right-reservation-section">
              {activeConversation ? (
                <MessagesArea
                  conversation={findActiveConversation(
                    conversations,
                    activeConversation,
                  )}
                />
              ) : (
                <div className="main-sample-image-sect">
                  <div className="sample-image-section" />
                  <div className="sample-message-section">
                    Your Messages
                  </div>
                  <div className="send-sample-message-section">
                    Send private photos and messages to a friend or group.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    };
}

export default ConversationsList;

// helpers

const findActiveConversation = (conversations, activeConversation) => conversations.find(
  conversation => conversation.id === activeConversation,
);
