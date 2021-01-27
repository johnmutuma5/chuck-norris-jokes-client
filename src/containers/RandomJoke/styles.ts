import styled from "styled-components";


export const RandomJokeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`;

export const JokeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Blockquote = styled.div`
  display: flex;
  border: 1px solid #e4ddcf;
  border-left-width: 10px;
  border-left-color: #6b5735;
  background: #f5f0e8;
  padding: 40px 25px 30px 25px;
  margin: 25px;
  font-size: 1.25em;
  font-family: fantasy;
  color: #755011;
  position: relative;
  min-width: 85%;
  box-shadow: 0 1px 1px #b7b0b0;
  span {
    font-size: 5em;
    position: absolute;
    top: -10px;
  }
  .icon-wrapper {
    display: flex;
    align-items: center;
    margin-right: 25px;
  }
`;

