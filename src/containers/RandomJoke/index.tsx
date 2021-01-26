import {NetworkStatus, useQuery} from '@apollo/client';
import React from 'react';
import {JokeDTO} from '../../common/types';
import Loader from '../../components/Loader';
import {GET_RANDOM_JOKE} from '../../queries/getRandomJoke';
import {Blockquote, JokeWrapper, RandomJokeWrapper} from './styles';
import {BorderedButton} from '../../common/styles';

interface RandomJokeDTO {
  random_joke: JokeDTO;
}

interface IRandomJokeProps {
  categoryId: string;
};

const RandomJoke: React.FC<IRandomJokeProps> = ({ categoryId }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery<RandomJokeDTO>(
    GET_RANDOM_JOKE,
    { variables: { category: categoryId },
      notifyOnNetworkStatusChange: true
    }
  );

  if(loading || networkStatus === NetworkStatus.refetch) {
    return (
      <Loader>
        Hold on ... Cooking a {categoryId} joke!!
      </Loader>
    );
  } else if(error) {
    return <div>error</div>;
  } else if(data?.random_joke.status !== 200) {
    return <div>Unexpected response: { data?.random_joke.status }</div>;
  } else {
    const { random_joke: { value: { text, icon_url} } } = data;
    return  (
      <RandomJokeWrapper>
        <JokeWrapper>
          <Blockquote>
            <span>&ldquo;</span>
            <div className="icon-wrapper">
              <img src={icon_url} alt="ICON" />
            </div>
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

export default RandomJoke;
