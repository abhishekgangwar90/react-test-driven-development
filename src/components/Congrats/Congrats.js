import React from 'react';


/**
 * @export
 * @param {*} {success}
 * @return {*} 
 */
export default function Congrats({success}){
  return <div data-test="Congrats-component">
    {success && 'Congratulations, You have Guessed the word.'}
  </div>
}