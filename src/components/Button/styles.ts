import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  color: #fff;

  border: 1px solid #81259d;
  border-radius: 21px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  &:disabled {
    background-color: #d3b8e0; 
    border-color: #d3b8e0; 
    color: #fff; 
    cursor: not-allowed; 
    opacity: 0.6;
  }
`;
