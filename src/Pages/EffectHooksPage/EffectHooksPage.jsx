import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Button, ButtonContainer, ContentContainer } from './EffectHooksPage.style';
import imageSrc from '../../images/EffectHooks.png';
const EffectHooksPage = () => {
  const [count, setCount] = useState(0);
  // useEffect hook
  useEffect(() => {
    console.log('useEffect: Component has mounted.');
    // This function will be executed after the component has mounted.

    return () => {
      console.log('useEffect: Component will unmount.');
      // This function will be executed just before the component is unmounted.
    };
  }, []); // The empty dependency array [] means this effect will run only once (on mount) and not re-run on subsequent renders.

  // useLayoutEffect hook
  useLayoutEffect(() => {
    console.log('useLayoutEffect: Component has mounted.');
    // This function will be executed after the component has mounted, but before any rendering.
    // It's a synchronous version of useEffect, meaning it runs before the browser paints the screen.

    return () => {
      console.log('useLayoutEffect: Component will unmount.');
      // This function will be executed just before the component is unmounted.
    };
  }, []); // The empty dependency array [] means this effect will run only once (on mount) and not re-run on subsequent renders.

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
      <ContentContainer>
      <ButtonContainer> 
      <h1> EffectHooks</h1>
      <h2>Count: {count}</h2>
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
        <h6>(ctrl+shift+c) for mount status on console</h6>
      </ButtonContainer>

       <img src={imageSrc} alt=" " style={{ width: '520px', height: 'auto', marginBottom: '20px' }} />
      </ContentContainer>
    
  );
};
export default EffectHooksPage;
