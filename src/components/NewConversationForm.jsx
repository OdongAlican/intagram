/* eslint-disable react/state-in-constructor */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { API_ROOT } from '../constants';
import { headers } from '../utils/api';

const NewConversationForm = ({ userData }) => {
  const [title, setTitle] = useState('');
  const [sender, setSender] = useState(null);
  const [receiver, setReciever] = useState(null);

  const history = useHistory();

  useEffect(() => {
    setTitle(userData.name);
    setSender(parseInt(localStorage.userId, 10));
    setReciever(4);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      title, user_id: sender, reciever_id: receiver,
    };
    try {
      axios.post(`${API_ROOT}/conversations`, data, headers);
      history.push('/conversations');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="newConversationForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="d-none"
          value={title}
        />
        <input
          type="text"
          className="d-none"
          value={sender}
        />
        <input
          type="text"
          className="d-none"
          value={receiver}
        />
        <input type="submit" className="btn border mr-2" />
      </form>
    </div>
  );
};

export default NewConversationForm;
