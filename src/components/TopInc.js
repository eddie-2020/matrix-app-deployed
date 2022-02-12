import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../index.css';
import { FaMicrophone, FaCog, FaArrowLeft } from 'react-icons/fa';

const CompanyTop = function topBanner({ symbol }) {
  return (
    <div className="top-banner-parent">
      <div className="flex-top-banner">
        <NavLink to="/">
          <FaArrowLeft className="leftArrow" />
        </NavLink>
        <h4 className="navTitle">{symbol}</h4>
        <div className="right-side-banner">
          <FaMicrophone className="mic" />
          <FaCog className="settings" />
        </div>
      </div>
    </div>
  );
};

CompanyTop.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default CompanyTop;
