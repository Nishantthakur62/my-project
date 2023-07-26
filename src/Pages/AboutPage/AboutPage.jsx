import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AdditionalSection, AdditionalTitle, AdditionalContent } from './AboutPage.style';
import Button from '../../component/Button/Button.jsx'; // Import the Button component

const AboutPage = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <>
      <AdditionalSection  colorindex={0}>
        <AdditionalTitle>State Hooks: useState and useReducer</AdditionalTitle>
        <AdditionalContent>
          <p>useState is used to add state variables to functional components, enabling them to hold and manage state.</p>
          <p>useReducer is an alternative to useState, often used for more complex state management scenarios, following the Redux pattern.</p>
          <Button onClick={() => navigateTo('/state-hooks')}>Know More</Button>
        </AdditionalContent>
      </AdditionalSection>

      <AdditionalSection  colorindex={1}>
        <AdditionalTitle>Effect Hook: useEffect and useLayoutEffect</AdditionalTitle>
        <AdditionalContent>
          <p>useEffect allows performing side effects in functional components, like fetching data, subscribing to events, or updating the DOM after rendering.</p>
          <p>useLayoutEffect is similar to useEffect but fires synchronously after all DOM mutations.</p>
          <Button onClick={() => navigateTo('/effect-hooks')}>Know More</Button>
        </AdditionalContent>
      </AdditionalSection>

      <AdditionalSection  colorindex={2}>
        <AdditionalTitle>Context Hook: useContext</AdditionalTitle>
        <AdditionalContent>
          <p>useContext provides access to a context created using React's Context API, allowing components to consume context values without nesting multiple levels.</p>
          <Button onClick={() => navigateTo('/context-hook')}>Know More</Button>
        </AdditionalContent>
      </AdditionalSection>

      <AdditionalSection  colorindex={3}>
        <AdditionalTitle>Ref Hook: useRef</AdditionalTitle>
        <AdditionalContent>
          <p>useRef allows creating a mutable reference that persists across renders, useful for accessing and modifying DOM elements or storing values between renders without triggering re-renders.</p>
          <Button onClick={() => navigateTo('/ref-hook')}>Know More</Button>
        </AdditionalContent>
      </AdditionalSection>

      <AdditionalSection  colorindex={4}>
        <AdditionalTitle>Memo Hook: useMemo</AdditionalTitle>
        <AdditionalContent>
          <p>useMemo memoizes the result of a function, useful for optimizing expensive computations and preventing unnecessary recalculations.</p>
          <Button onClick={() => navigateTo('/memo-hook')}>Know More</Button>
        </AdditionalContent>
      </AdditionalSection>

      <AdditionalSection  colorindex={5}>
        <AdditionalTitle>Callback Hook: useCallback</AdditionalTitle>
        <AdditionalContent>
          <p>useCallback is used to memoize functions and prevent unnecessary re-creations of function references, improving performance in certain scenarios.</p>
          <Button onClick={() => navigateTo('/callback-hook')}>Know More</Button>
        </AdditionalContent>
      </AdditionalSection>

      <AdditionalSection  colorindex={6}>
        <AdditionalTitle>Custom Hooks</AdditionalTitle>
        <AdditionalContent>
          <p>Custom hooks are functions created by developers to encapsulate complex or repetitive logic, making it reusable across different components.</p>
          <Button onClick={() => navigateTo('/custom-hooks')}>Know More</Button>
        </AdditionalContent>
      </AdditionalSection>
    </>
  );
};

export default AboutPage;
