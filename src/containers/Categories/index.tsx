import {useQuery} from '@apollo/client';
import React from 'react';
import {JokeCategoriesDTO} from '../../common/types';
import Loader from '../../components/Loader';
import {GET_CATEGORIES} from '../../queries/getCategories';
import RandomJoke from '../RandomJoke';
import {CategoriesWrapper, CategoryDetail, CategoryDetailsPlaceholder, CategoryDetailsTitle, CategoryNames} from './styles';
import portrait from '../../static/chucknorris-potrait.png';
import {NavLink, useParams} from 'react-router-dom';



interface IJokeCategoriesResponse {
  categories: JokeCategoriesDTO;
}

const Categories: React.FC = () => {
  const { loading, error, data } = useQuery<IJokeCategoriesResponse>(GET_CATEGORIES); 
  const { id: selectedCategory } = useParams<{id: string}>();

  if(loading) {
    return <Loader>Loading joke categories</Loader>;
  } else if(error) {
    return <div>error</div>;
  } else if(data?.categories.status !== 200) {
    return <div>Unexpected response: { data?.categories.status }</div>;
  } else {
    return (
      <CategoriesWrapper>
        <CategoryNames>
          {
            data?.categories.value.map(category => (
              <NavLink key={category}
                       className='category-link'
                       activeClassName='active'
                       to={ `/categories/${category}` }
              >
                { category }
              </NavLink>
            ))
          }
        </CategoryNames>
        <CategoryDetail>
          <img width="80" src={portrait} alt="Chuck Norris" />
          {
            selectedCategory ?
              (
                <React.Fragment>
                  <CategoryDetailsTitle>
                    What do you think about the&nbsp;<span>{selectedCategory}</span>&nbsp;life of Chuck??
                  </CategoryDetailsTitle>
                  <RandomJoke categoryId={ selectedCategory } />
                </React.Fragment>
              ) :
              <CategoryDetailsPlaceholder>
                <CategoryDetailsTitle>
                  Chuck Norris is ready to crack your ribs!!
                </CategoryDetailsTitle>
                <p>Choose a category on the left.</p>
              </CategoryDetailsPlaceholder>
          }
        </CategoryDetail>
      </CategoriesWrapper>
    );
  }
}

export default Categories;
