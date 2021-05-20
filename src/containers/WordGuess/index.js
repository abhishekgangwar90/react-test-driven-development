import React from 'react';
import Congrats from '../../components/Congrats/Congrats';
import GuessedWords from '../../components/GuessedWords/GuessedWords';
import './wordGuess.css';


/**
 * Have 3 components
 * Congrats - shows congrats message on successfully guessing the word
 * word guess - shows either a message or list of guessed words till now
 * @return {*} 
 */
function WordGuess(){
  return <div className="container">
    <Congrats success={false} />
    <GuessedWords guessedWords={[{
    word: 'tent', letterMatched: 2
    },{
      word: 'nice', letterMatched: 3
    }]}/>
  </div>
}

export default WordGuess;