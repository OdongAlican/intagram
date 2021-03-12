/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
/* eslint-disable react/no-deprecated */

import React from 'react';
import axios from 'axios';
import { API_ROOT } from '../constants';
import { headers } from '../utils/api';

class NewMessageForm extends React.Component {
  state = {
    text: '',
    conversation_id: this.props.conversation_id,
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ conversation_id: nextProps.conversation_id });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    try {
      axios.post(`${API_ROOT}/messagings`, {
        text: this.state.text,
        conversation_id: this.state.conversation_id,
      }, headers);

      this.setState({ text: '' });
    } catch (error) {
      console.log(error);
    }
  };

  render = () => (
    <div className="newMessageForm">
      <form onSubmit={this.handleSubmit}>
        <label>New Message:</label>
        <br />
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewMessageForm;
