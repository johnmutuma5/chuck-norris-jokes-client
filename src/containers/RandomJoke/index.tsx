import {gql, NetworkStatus, useQuery} from '@apollo/client';
import React from 'react';
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
          <p>{text}</p>
        </JokeWrapper>
        <BorderedButton onClick={ () => refetch() }>
          Show me another
        </BorderedButton>
      </RandomJokeWrapper>
    );
  }
}

export default RandomJoke;
