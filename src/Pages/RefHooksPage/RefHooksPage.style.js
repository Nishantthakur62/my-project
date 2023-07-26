// refhookspage.style.js

import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

export const CounterDisplay = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;
export const CounterWrapper = styled.div`
height: 300px;
width: 300px;
margin: 150px auto;
padding: 40px;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color:  #f5f5f5;
text-align: center;
transition: 0.3s;
  &:hover {
    transform: scale(1.1);

  }

`