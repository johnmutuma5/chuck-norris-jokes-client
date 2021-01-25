import {NetworkStatus, useQuery} from '@apollo/client';
import React from 'react';
import styled from 'styled-components';
import {JokeDTO} from '../../common/types';
import {GET_RANDOM_JOKE} from '../../queries/getRandomJoke';
import {BorderedButton, JokeWrapper, RandomJokeWrapper} from './styles';

interface RandomJokeDTO {
  random_joke: JokeDTO;
}

interface IRandomJokeProps {
  categoryId: string;
};

const RandomJoke: React.FC<IRandomJokeProps> = ({ categoryId }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery<RandomJokeDTO>(GET_RANDOM_JOKE, {
    variables: {
      category: categoryId
    },
    notifyOnNetworkStatusChange: true
  });


  if(loading || networkStatus === NetworkStatus.refetch) {
    return <div>Loading...</div>;
  } else if(error) {
    return <div>error</div>;
  } else if(data?.random_joke.status !== 200) {
    return <div>Unexpected response: { data?.random_joke.status }</div>;
  } else {
    const { random_joke: { value: { text, icon_url} } } = data;
    return  (
      <RandomJokeWrapper>
        <JokeWrapper>
          <div>
            <img src={icon_url} alt="ICON" />
          </div>
          <Blockquote>
            <span>&ldquo;</span>
            <p>{text}</p>
          </Blockquote>
        </JokeWrapper>
        <BorderedButton onClick={ () => refetch() }>
          Show me another
        </BorderedButton>
      </RandomJokeWrapper>
    );
  }
}

const Blockquote = styled.div`
  border: 1px solid #e4ddcf;
  border-left-width: 10px;
  border-left-color: #6b5735;
  padding: 60px 25px 30px 25px;
  margin: 25px;
  font-size: 1.5em;
  font-family: fantasy;
  color: #8e8473;
  position: relative;
  span {
    font-size: 5em;
    position: absolute;
    top: 0;
  }
`;

export default RandomJoke;
