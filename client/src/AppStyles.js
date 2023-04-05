import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
`;

export const Select = styled.select`
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
`;

export const TextArea = styled.textarea`
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  width: 500px;
  height: 200px;
  margin-bottom: 10px;
`;

export const Boxe = styled.div`
border: 2px solid #ccc;
border-radius: 4px;
padding: 8px;
font-size: 16px;
`;

export const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
`;