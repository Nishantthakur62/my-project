import React, { useState, useCallback } from 'react';
import { PageContainer, Button, CounterSection, CounterResult, InfoMessage } from './UseCallBackHook.style';

const UseCallBackHookPage = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  // Using useCallback to memoize the increment function
  const handleIncrement = useCallback(() => {
    setVisitorCount(prevCount => prevCount + 1);
  }, []);

  return (
    <PageContainer>
      <CounterSection>
      <p>Click the "Visit" button to simulate a website visit:</p>
      <h1>Welcome to My Website</h1>
      <Button onClick={handleIncrement}>Visit</Button>
        <h2>Visitor Count:</h2>
        <CounterResult>{visitorCount}</CounterResult>
      </CounterSection>
      <InfoMessage>
        The visitor count is automatically updated when you click the "Visit" button. The "handleIncrement" function
        is memoized using the "useCallback" hook, which means the same function instance is used across renders unless
        the dependencies change. This optimization prevents unnecessary re-creations of the function, improving
        performance and avoiding redundant calculations when refreshing the page.
      </InfoMessage>
    </PageContainer>
  );
};

export default UseCallBackHookPage;
