// refhookspage.jsx

import React, { useRef, useState } from 'react';
import { Button, CounterDisplay, CounterWrapper } from './RefHooksPage.style';

const RefHooksPage = () => {
  const clickCountRef = useRef(2);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    clickCountRef.current += 1;
    setClickCount(clickCountRef.current);
  };

  return (
    <CounterWrapper>
      <h1>Ref Hooks Page</h1>
      <Button onClick={handleClick}>Click Me</Button>
      <CounterDisplay>Total Clicks: {clickCount}</CounterDisplay>
    </CounterWrapper>
  );
};

export default RefHooksPage;
