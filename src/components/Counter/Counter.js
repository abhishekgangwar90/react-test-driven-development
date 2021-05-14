import React from 'react'
import './Counter.css';

function Counter() {
  const [count, setCount] = React.useState(0);
  const [canShowError, setCanShowError] = React.useState(false);

  const increaseCount = () =>{
    if(!count){
      setCanShowError(false)
    }
    setCount(count+1)
  }

  const decreaseCount = () =>{
    if(count){
      setCount(count-1)
    } else if(!count){
      setCanShowError(true)
    }
  }

  return (
    <div className="counter" data-test="component-Counter">
      <header className="counter-header">
        <h1 data-test="Counter-header">Counter Application <span  data-test="Counter-count">{count}</span> </h1>
        <div>
          <button data-test="Counter-button-increase" type="button" onClick={increaseCount}>
            Increase
          </button>
          <button data-test="Counter-button-decrease" type="button" onClick={decreaseCount}>
            Decrease
          </button>
        </div>
        <div data-test="Counter-count-error">
          {canShowError && 'Can not decrement the counter, As is already zero.'}
        </div>
      </header>
    </div>
  );
}

export default Counter;
