import React from 'react';
import { useTheme } from './ThemeContext';
import StyledContextHooksPage from './ContextHooksPage.style';

const ContextHooksPage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledContextHooksPage theme={theme}>
      <h1>Context Hook Demo Page</h1>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </StyledContextHooksPage>
  );
};

export default ContextHooksPage;
