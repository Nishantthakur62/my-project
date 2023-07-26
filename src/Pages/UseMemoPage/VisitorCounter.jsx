import React, { useMemo } from 'react';

const VisitorCounter = ({ count }) => {
  const calculateVisitsMessage = useMemo(() => {
    if (count === 1) {
      return 'You are the first visitor!';
    } else if (count > 1 && count <= 5) {
      return `You are visitor number ${count}.`;
    } else {
      return `You have ${count} visitors.`;
    }
  }, [count]);

  return (
    <div>
      <p>{calculateVisitsMessage}</p>
    </div>
  );
};

export { VisitorCounter };
