import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/Counter';

import classes from './counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  
  const counter = useSelector((state) => {
    return state.counter.counter;
  });

  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Inc</button>
      <button onClick={increaseHandler}>Inc by 10</button>
      <button onClick={decrementHandler}>Dec</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// const Counter = () => {
//   const counter = useSelector((state) => {
//     return state.counter;
//   });
//   const show = useSelector((state) => state.showCounter);

//   const dispatch = useDispatch();

//   const incrementHandler = () => {
//     dispatch({ type: 'increment' });
//   };
//   const increaseHandler = () => {
//     dispatch({ type: 'increase', amount: 10 });
//   };

//   const decrementHandler = () => {
//     dispatch({ type: 'decrement' });
//   };

//   const toggleCounterHandler = () => {
//     dispatch({ type: 'toggle' });
//   };
//   // console.log(counter);

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {show && <div className={classes.value}>{counter}</div>}
//       <button onClick={incrementHandler}>Inc</button>
//       <button onClick={increaseHandler}>Inc by 10</button>
//       <button onClick={decrementHandler}>Dec</button>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;
