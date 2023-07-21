import React from 'react';
import { AdditionalSection, AdditionalTitle, AdditionalContent } from './AboutPage.style';

const AboutPage = () => {
  return (
    <>
      <AdditionalSection>
        <AdditionalTitle>State Hooks: useState and useReducer</AdditionalTitle>
        <AdditionalContent>
          <p>useState is used to add state variables to functional components, enabling them to hold and manage state.</p>
          <p>useReducer is an alternative to useState, often used for more complex state management scenarios, following the Redux pattern.</p>
        </AdditionalContent>
      </AdditionalSection>

      <AdditionalSection>
        <AdditionalTitle>Effect Hook: useEffect and useLayoutEffect</AdditionalTitle>
        <AdditionalContent>
          <p>useEffect allows performing side effects in functional components, like fetching data, subscribing to events, or updating the DOM after rendering.</p>
          <p>useLayoutEffect is similar to useEffect but fires synchronously after all DOM mutations.</p>
        </AdditionalContent>
      </AdditionalSection>

      <AdditionalSection>
        <AdditionalTitle>Context Hook: useContext</AdditionalTitle>
        <AdditionalContent>
          <p>useContext provides access to a context created using React's Context API, allowing components to consume context values without nesting multiple levels.</p>
        </AdditionalContent>
      </AdditionalSection>

      <AdditionalSection>
        <AdditionalTitle>Ref Hook: useRef</AdditionalTitle>
        <AdditionalContent>
          <p>useRef allows creating a mutable reference that persists across renders, useful for accessing and modifying DOM elements or storing values between renders without triggering re-renders.</p>
        </AdditionalContent>
      </AdditionalSection>

      <AdditionalSection>
        <AdditionalTitle>Callback Hook: useCallback</AdditionalTitle>
        <AdditionalContent>
          <p>useCallback is used to memoize functions and prevent unnecessary re-creations of function references, improving performance in certain scenarios.</p>
        </AdditionalContent>
      </AdditionalSection>

      <AdditionalSection>
        <AdditionalTitle>Memo Hook: useMemo</AdditionalTitle>
        <AdditionalContent>
          <p>useMemo memoizes the result of a function, useful for optimizing expensive computations and preventing unnecessary recalculations.</p>
        </AdditionalContent>
      </AdditionalSection>

      <AdditionalSection>
        <AdditionalTitle>Custom Hooks</AdditionalTitle>
        <AdditionalContent>
          <p>Custom hooks are functions created by developers to encapsulate complex or reusable logic. They can combine multiple existing hooks or other logic and allow for cleaner and more modular code.</p>
        </AdditionalContent>
      </AdditionalSection>
    </>
  );
};

export default AboutPage;
