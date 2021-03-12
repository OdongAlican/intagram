/* eslint-disable react/state-in-constructor */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import axios from 'axios';
import { API_ROOT } from '../constants';
import { headers } from '../utils/api';

class NewConversationForm extends React.Component {
  state = {
    title: '',
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios.post(`${API_ROOT}/conversations`, { title: this.state.title }, headers);
    this.setState({ title: '' });
  };

  render = () => (
    <div className="newConversationForm">
      <form onSubmit={this.handleSubmit}>
        <label>New Conversation:</label>
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewConversationForm;
