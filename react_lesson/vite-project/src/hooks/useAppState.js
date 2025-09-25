import { useState } from 'react';
import { toggleBetweenValues } from '../utils/helpers';
import { MESSAGES } from '../constants';

/**
 * Custom hook for managing message state with toggle functionality
 * @param {string} initialMessage 
 * @returns {Object} { message, toggleMessage }
 */
export const useToggleMessage = (initialMessage = MESSAGES.HELLO) => {
  const [message, setMessage] = useState(initialMessage);

  const toggleMessage = () => {
    setMessage(prev => toggleBetweenValues(prev, MESSAGES.HELLO, MESSAGES.GOODBYE));
  };

  return { message, toggleMessage };
};

/**
 * Custom hook for managing counter with increment, decrement, and reset
 * @param {number} initialValue 
 * @returns {Object} { count, increment, decrement, reset }
 */
export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};
