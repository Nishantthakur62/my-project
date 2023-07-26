import { useState, useEffect } from 'react';

const useKeyPress = () => {
  const [keyPressed, setKeyPressed] = useState('');

  const handleKeyPress = (e) => {
    setKeyPressed(e.key);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return keyPressed;
};

export default useKeyPress;
