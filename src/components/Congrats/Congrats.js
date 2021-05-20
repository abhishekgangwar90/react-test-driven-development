import React from 'react';
import PropTypes from 'prop-types';

/**
 * @export
 * @param {*} {success}
 * @return {*} 
 */
function Congrats({success}){
  return <div role="alert" className="alert alert-success" data-test="Congrats-component">
    {success && 'Congratulations, You have Guessed the word.'}
  </div>
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

Congrats.defaultProps = {

}

export default Congrats;