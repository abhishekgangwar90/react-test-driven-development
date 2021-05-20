import React from 'react';
import PropTypes from 'prop-types';

function Input({secretWord}){
  return <input data-test="component-input" />
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
}

export default Input;