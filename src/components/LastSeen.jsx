/* eslint-disable react/prop-types */

import React from 'react';
import ReactTimeAgo from 'react-time-ago';

export default function LastSeen({ date }) {
  return (
    <div>
      Created
      {' '}
      <ReactTimeAgo date={date} locale="en-US" />
    </div>
  );
}
