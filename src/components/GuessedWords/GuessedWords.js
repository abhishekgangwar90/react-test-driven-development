import React from 'react';
import PropTypes from 'prop-types';

function GuessedWords({guessedWords}){
  let content;
  if(guessedWords.length < 1){
    content = <div className="alert alert-info" data-test="no-guessed-words">
      Please Guess a word.
    </div>
  } else{
    content = <div className="" data-test="guessed-words">
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th> Word </th>
            <th> Letters Matched </th>
          </tr>
        </thead>
        <tbody>
         {guessedWords.map((elm, index) =>{
           return <tr key={index} data-test="guessed-word"> 
             <td> {elm.word} </td>
            <td> {elm.letterMatched} </td>
           </tr>
         })}
        </tbody>
      </table>
    </div>
  }

  return <div data-test="component-guessed-word">
    {content}
  </div>
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      letterMatched: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessedWords;