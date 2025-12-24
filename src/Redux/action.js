// action.js

// Action Types
export const INCREMENT_REQUEST = 'INCREMENT_REQUEST';
export const DECREMENT_REQUEST = 'DECREMENT_REQUEST';
export const RESET_REQUEST = 'RESET_REQUEST';
// Action Creators
export const incrementRequest = () => ({
  type: INCREMENT_REQUEST,
});

export const decrementRequest = () => ({
  type: DECREMENT_REQUEST,
});
export const resetRequest = () => ({
    type: RESET_REQUEST,
  });