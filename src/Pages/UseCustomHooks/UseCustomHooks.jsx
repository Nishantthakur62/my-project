import React, { useState } from 'react';
import { PageContainer, Section, Heading, Button, Input, WindowSizeContainer, WindowSizeText, WindowSizeValue, ToggleContainer, ToggleText, ToggleButton, KeyPressContainer, KeyPressText, KeyPressInput, CopyContainer, CopyText, CopyButton } from './UseCustomHooks.style';
import useTheme from '../../hooks/useTheme';
import useCounter from '../../hooks/useCounter';
import useLocalStorage from '../../hooks/useLocalStorage';
import useWindowSize from '../../hooks/useWindowSize';
import useToggle from '../../hooks/useToggle';
import useKeyPress from '../../hooks/useKeyPress';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const UseCustomHooksPage = () => {
  // Example 1: useTheme custom hook
  const { theme, toggleTheme } = useTheme();

  // Example 2: useCounter custom hook
  const { count, increment, decrement } = useCounter(0);

  // Example 3: useLocalStorage custom hook
  const [name, setName] = useLocalStorage('username', 'Guest');

  // Example 4: useWindowSize custom hook
  const windowSize = useWindowSize();

  // Example 5: useToggle custom hook
  const { on, toggle } = useToggle(false);

  // Example 6: useKeyPress custom hook
  const keyPressed = useKeyPress();
//   const [keyPressed, setKeyPressed] = useKeyPress();

  // Example 7: useCopyToClipboard custom hook
  const { copyToClipboard } = useCopyToClipboard();

  // New state to store user input text
  const [inputText, setInputText] = useState('');

  // Example 8: useDocumentTitle custom hook
  useDocumentTitle(`Custom Hooks Examples | ${theme}`);

  return (
    <PageContainer theme={theme}>
      <h1>Custom Hooks Examples</h1>

      {/* Example 1: useTheme */}
      <Section>
        <Heading>useTheme Example</Heading>
        <p>Current Theme: {theme}</p>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </Section>

      <hr />

      {/* Example 2: useCounter */}
      <Section>
        <Heading>useCounter Example</Heading>
        <p>Count: {count}</p>
        <Button onClick={increment}>Increment Count</Button>
        <Button onClick={decrement}>Decrement Count</Button>
      </Section>

      <hr />

      {/* Example 3: useLocalStorage */}
      <Section>
        <Heading>useLocalStorage Example</Heading>
        <p>Hello, {name}</p>
        <Input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </Section>

      <hr />

      {/* Example 4: useWindowSize */}
      <Section>
        <Heading>useWindowSize Example</Heading>
        <WindowSizeContainer>
          <WindowSizeText>Window Width: </WindowSizeText>
          <WindowSizeValue>{windowSize.width}px</WindowSizeValue>
        </WindowSizeContainer>
        <WindowSizeContainer>
          <WindowSizeText>Window Height: </WindowSizeText>
          <WindowSizeValue>{windowSize.height}px</WindowSizeValue>
        </WindowSizeContainer>
      </Section>

      <hr />

      {/* Example 5: useToggle */}
      <Section>
        <Heading>useToggle Example</Heading>
        <ToggleContainer>
          <ToggleText>Toggle On/Off: {on ? 'On' : 'Off'}</ToggleText>
          <ToggleButton onClick={toggle}>Toggle</ToggleButton>
        </ToggleContainer>
      </Section>

      <hr />

      {/* Example 6: useKeyPress */}
      <Section>
        <Heading>useKeyPress Example</Heading>
        <KeyPressContainer>
          <KeyPressText>Press any key:</KeyPressText>
          <KeyPressInput value={keyPressed} readOnly />
        </KeyPressContainer>
      </Section>

      <hr />

      {/* Example 7: useCopyToClipboard */}
      <Section>
      <Heading>useCopyToClipboard Example</Heading>
      <CopyContainer>
        <CopyText>Copy this text:</CopyText>
        {/* User input text */}
        <Input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text to copy"
        />
        <CopyButton onClick={() => copyToClipboard(inputText)}>
          Copy to Clipboard
        </CopyButton>
      </CopyContainer>
    </Section>

      <hr />

      {/* Example 8: useDocumentTitle */}
      <Section>
        <Heading>useDocumentTitle Example</Heading>
        <p>Current Document Title: Custom Hooks Examples | {theme}</p>
      </Section>
    </PageContainer>
  );
};

export default UseCustomHooksPage;
