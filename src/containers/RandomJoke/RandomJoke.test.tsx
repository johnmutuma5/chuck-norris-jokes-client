import {MockedProvider, MockedResponse} from '@apollo/react-testing';
import {render, screen} from '@testing-library/react';
import React from 'react';
import {act} from 'react-dom/test-utils';
import wait from 'waait';
import RandomJoke from '.';
import {GET_RANDOM_JOKE} from '../../queries/getRandomJoke';

const RandomJokeProviders: React.FC = ({ children }: any) => {
  const mocks: ReadonlyArray<MockedResponse> = [
    {
      request: {
        query: GET_RANDOM_JOKE,
        variables: { category: 'movie' }
      },
      result: {
        data: {
          random_joke: {
            status: 200,
            value: {
              id: '01-test-joke',
              text: 'Hahaha! Chuck Norris you\'re funny',
              joke_url: 'www.jokes.com',
              icon_url: 'www.jokes.com/icons/01-test-joke'
            }
          }
        }
      }
    }
  ];

  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      { children }
    </MockedProvider>
  );
}

describe('In RandomJoke', () => {
  describe('before a random joke has been resolved', () => {
    it('should display a loading state', () => {
      render(<RandomJoke categoryId='movie' />, {
        wrapper: RandomJokeProviders
      });

      const loadingMessage = screen.getByText(/cooking a movie joke/i);
      expect(loadingMessage).toBeTruthy();
    })
  });

  describe('after a random joke has been resolved', () => {
    it('should display the joke', async () => {
      render(<RandomJoke categoryId='movie' />, {
        wrapper: RandomJokeProviders
      });

      await act(wait);
      const jokeText = screen.getByText(/chuck norris you're funny/i);
      expect(jokeText).toBeTruthy();
    });

    it('should display button to load another joke for category', async () => {
      render(<RandomJoke categoryId='movie' />, {
        wrapper: RandomJokeProviders
      });

      await act(wait);
      const buttonText = screen.getByText(/show me another/i);
      expect(buttonText).toBeTruthy();
    });
  });
});

