import React, { useState, useReducer } from 'react';
import { PageContainer, CounterSection, CounterButton, CounterResult } from './StateHooksDemoPage.style';
import imageSrc from '../../images/UseStateImg.png';
// Reducer function to handle state updates
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const StateHooksDemoPage = () => {
  // useState to manage local state
  const [message, setMessage] = useState('Hello, I am a useState demo! Click me to set new message');
  // useReducer to manage more complex state
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };
  const updateMessage = () => {
    setMessage('useReducer Demo!');
  };
  return (
    <PageContainer>
      <h1 onClick={updateMessage}>{message}</h1>
      <CounterSection>
        <h2>Counter using useReducer:</h2>
        <CounterResult>{state.count}</CounterResult>
        <CounterButton onClick={handleIncrement}>Increment</CounterButton>
        <CounterButton onClick={handleDecrement}>Decrement</CounterButton>
      </CounterSection>
        <img src={imageSrc} alt=" " style={{ width: '520px', height: 'auto', marginBottom: '20px' }} />
    </PageContainer>
  );
};

export default StateHooksDemoPage;
