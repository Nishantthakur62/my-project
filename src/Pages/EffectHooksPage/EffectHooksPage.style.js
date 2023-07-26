import styled from 'styled-components';

export const Button = styled.button`
background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ButtonContainer = styled.div`
height: 300px;
width: 300px;
margin: 150px auto;
padding: 40px;
justify-content: space-between;
background-color:  #f5f5f5;
text-align: center;
transition: 0.3s;
  &:hover {
    transform: scale(1.1);

  }
`;
export const ContentContainer = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin: 40px;
  `;