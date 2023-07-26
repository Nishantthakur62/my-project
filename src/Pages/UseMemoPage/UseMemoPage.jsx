import React, { useState, useMemo } from 'react';
import { PageContainer, Button, CounterResult } from './UseMemoPage.style';

const UseMemoPage = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  const handleIncrement = () => {
    setVisitorCount(prevCount => prevCount + 1);
  };

  const calculateVisitsMessage = useMemo(() => {
    if (visitorCount === 1) {
      return 'You are the first visitor!';
    } else if (visitorCount > 1 && visitorCount <= 5) {
      return `You are visitor number ${visitorCount}.`;
    } else {
      return `You have ${visitorCount} visitors.`;
    }
  }, [visitorCount]);

  return (
    <PageContainer>
      <h1>Welcome to My Website</h1>
      <p>Click the button to simulate a website visit:</p>
      <Button onClick={handleIncrement}>Visit</Button>
      <h2>Visitor Count:</h2>
      <CounterResult>{calculateVisitsMessage}</CounterResult>
    </PageContainer>
  );
};

export default UseMemoPage;
