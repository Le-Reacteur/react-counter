import React from "react";

const renderDecrement = props => {
  if (props.value > 0) {
    return <button onClick={props.onDecrement}>-</button>;
  }
  return null;
};

const renderIncrement = props => {
  if (props.value < 10) {
    return <button onClick={props.onIncrement}>+</button>;
  }
  return null;
};

const Counter = props => {
  console.log(props.value); // 0
  console.log(props.onIncrement); // function
  console.log(props.onDecrement); // function

  return (
    <>
      <p>{props.value}</p>
      <div>
        {renderDecrement(props)}
        {renderIncrement(props)}
      </div>
    </>
  );
};

// if inline :
// return (
//   <>
//     <p>{props.value}</p>
//     <div>
//       {props.value > 0 && <button onClick={props.onDecrement}>-</button>}
//       {props.value < 10 && <button onClick={props.onIncrement}>+</button>}
//     </div>
//   </>
// );

// avec ternaire :
// return (
//   <>
//     <p>{props.value}</p>
//     <div>
//       {props.value > 0 ? (
//         <button onClick={props.onDecrement}>-</button>
//       ) : null}
//       {props.value < 10 ? (
//         <button onClick={props.onIncrement}>+</button>
//       ) : null}
//     </div>
//   </>
// );

export default Counter;
