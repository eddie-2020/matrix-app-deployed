import React from 'react';
import { FaMicrophone, FaCog } from 'react-icons/fa';

const Top = function topDiv() {
  return (
    <div className="top-body p-3">
      <div className="holder">
        <p className="top-heading">Companies</p>
        <div className="icons">
          <FaMicrophone className="mic" />
          <FaCog className="settings" />
        </div>
      </div>
    </div>
  );
};

export default Top;
