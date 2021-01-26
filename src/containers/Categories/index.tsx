import {useQuery} from '@apollo/client';
import React, {useState} from 'react';
import {JokeCategoriesDTO} from '../../common/types';
import Loader from '../../components/Loader';
import {CATEGORIES_QUERY} from '../../queries/getCategories';
import RandomJoke from '../RandomJoke';
import {CategoriesWrapper, CategoryItem} from './styles';

interface IJokeCategoriesResponse {
  categories: JokeCategoriesDTO;
}

const Categories: React.FC = () => {
  const { loading, error, data } = useQuery<IJokeCategoriesResponse>(CATEGORIES_QUERY); 
  const [ selectedCategory, setSelectedCategory ] = useState<string>();

  if(loading) {
    return <Loader>Loading joke categories</Loader>;
  } else if(error) {
    return <div>error</div>;
  } else if(data?.categories.status !== 200) {
    return <div>Unexpected response: { data?.categories.status }</div>;
  } else {
    return (
      <CategoriesWrapper>
        <div className='category-names'>
          {
            data?.categories.value.map(category => (
              <CategoryItem onClick={ (_) => setSelectedCategory(category) }
                className={(selectedCategory === category ? 'active': 'inactive')}
                key={category}
              >
                { category }
              </CategoryItem>
            )
                                      )
          }
        </div>
        <div className='category-detail'>
          {
            selectedCategory ?
              (
                <React.Fragment>
                  <div className='category-detail-title'>
                    <span>{selectedCategory}</span>&nbsp;Jokes about the Legend!
                  </div>
                  <RandomJoke categoryId={ selectedCategory } />
                </React.Fragment>
              ) :
              <div className='detail-placeholder'>
                <p className='title'>Chuck Norris is ready to crack your ribs!!</p>
                <p>Choose a category on the left!!!</p>
              </div>
          }
        </div>
      </CategoriesWrapper>
    );
  }
}

export default Categories;
