import styled from "styled-components";


export const RandomJokeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JokeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BorderedButton = styled.button`
  position: relative;
  color: inherit;
  margin: auto;
  background: transparent;
  border: 1px solid #b99b66;
  border-radius: 9999px;
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 2px 5px #e1e1e1;
    background: #b99b66;
    color: white;
  }
`;

