import React from 'react';
import wait from 'waait';
import Categories from '.';
import {MemoryRouter} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing'
import {GET_CATEGORIES} from '../../queries/getCategories';
import {act} from 'react-dom/test-utils';

const CategoriesProviders: React.FC = ({ children }: any) => {
  const mocks: any[] = [
    {
      request: {
        query: GET_CATEGORIES
      },
      result: {
        data: {
          categories: {
            status: 200,
            value: [ 'movie', 'dev' ]
          }
        }
      }
    }
  ];
  return (
    <MemoryRouter>
      <MockedProvider mocks={mocks} addTypename={false}>
        { children }
      </MockedProvider>
    </MemoryRouter>

  )
};

describe('In Categories', () => {
  describe('before categories are resolved', () => {
    it('should show loading state for the categories', () => {
      render(<Categories />, { wrapper: CategoriesProviders });
      const loadingMessage = screen.queryByText(/loading joke categories/i);
      expect(loadingMessage).toBeTruthy();
    });
    }
  );

  describe('after categories are resolved', () => {
    it('renders the expected category links', async () => {
      render(<Categories />, { wrapper: CategoriesProviders });

      await act(wait);

      const movieCategoryLink = screen.queryByText('movie');
      const devCategoryLink = screen.queryByText('dev');

      expect(movieCategoryLink).toBeTruthy();
      expect(devCategoryLink).toBeTruthy();
    });

    it('prompts user to select a category', async () => {
      render(<Categories />, { wrapper: CategoriesProviders });

      await act(wait);

      const chooseCategoryPrompt = screen.queryByText(/choose a category/i);
      expect(chooseCategoryPrompt).toBeTruthy();
    });
  });
});

