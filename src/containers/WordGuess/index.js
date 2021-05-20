import React from 'react';
import Congrats from '../../components/Congrats/Congrats';
import './wordGuess.css';


/**
 * @return {*} 
 */
function WordGuess(){
  return <div className="container">
    <Congrats success={true} />
  </div>
}

export default WordGuess;