import React from 'react';
import PropTypes from 'prop-types';

/**
 * Shows a Message if the word is guessed right
 * @export
 * @param {*} {success}
 * @return {*} 
 */
function Congrats({success}){
  return <div role="alert" data-test="Congrats-component">
    {success && <div className="alert alert-success">
      Congratulations, You have Guessed the word.
    </div> }
  </div>
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

Congrats.defaultProps = {

}

export default Congrats;