import React from "react";

const Counter = props => {
  console.log(props.value); // 0
  console.log(props.onIncrement); // function
  console.log(props.onDecrement); // function

  return (
    <>
      <p>{props.value}</p>
      <div>
        <button onClick={props.onDecrement}>-</button>
        <button onClick={props.onIncrement}>+</button>
      </div>
    </>
  );
};

export default Counter;
