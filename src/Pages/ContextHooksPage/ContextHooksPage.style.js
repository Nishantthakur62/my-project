// ContextHooksDemoPage.style.js
import styled from 'styled-components';

const StyledContextHooksPage = styled.div`
  padding: 20px;
  margin:200px;
  background-color: ${(props) =>
    props.theme === 'dark' ? '#333' : 'var(--background-color)'};
  color: ${(props) => (props.theme === 'dark' ? '#fff' : 'var(--text-color)')};
  text-align: center;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    margin-bottom: 10px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: ${(props) =>
      props.theme === 'dark' ? '#444' : 'var(--button-color)'};
    color: ${(props) => (props.theme === 'dark' ? '#fff' : 'var(--text-color)')};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) =>
        props.theme === 'dark' ? '#666' : 'var(--button-hover-color)'};
    }
  }
`;

export default StyledContextHooksPage;
