import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ headerMessage }) => (
  <h1>
    {headerMessage}  
  </h1>
);

Header.propTypes = {
  headerMessage:  PropTypes.string.isRequired,
};

Header.defaultProps = {
  headerMessage: 'React CDP 2017'
};

export default Header;