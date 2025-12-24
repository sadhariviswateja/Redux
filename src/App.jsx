import { useDispatch, useSelector } from 'react-redux';
import {
  incrementRequest,
  decrementRequest,
  resetRequest,
} from './Redux/action';
import React from 'react';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(incrementRequest())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrementRequest())}>
        Decrement
      </button>
      <button onClick={() => dispatch(resetRequest())}>
        Reset
      </button>
    </div>
  );
  
}

export default App;
