import {NetworkStatus, useQuery} from '@apollo/client';
import React from 'react';
import styled from 'styled-components';
import {JokeDTO} from '../../common/types';
import Loader from '../../components/Loader';
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

const Blockquote = styled.div`
  display: flex;
  border: 1px solid #e4ddcf;
  border-left-width: 10px;
  border-left-color: #6b5735;
  background: #dcc69d;
  padding: 60px 25px 30px 25px;
  margin: 25px;
  font-size: 1.5em;
  font-family: fantasy;
  color: #755011;
  position: relative;
  width: 75%;
  box-shadow: 1px 2px 3px #b7b0b0;
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

export default RandomJoke;
