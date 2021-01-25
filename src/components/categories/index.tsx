import {useQuery} from '@apollo/client';
import React, {useState} from 'react';
import {JokeCategoriesDTO} from '../../common/types';
import {CATEGORIES_QUERY} from '../../queries/getCategories';
import {CategoriesWrapper, CategoryItem} from './styles';

const Categories: React.FC = () => {
  const { loading, error, data } = useQuery<JokeCategoriesDTO>(CATEGORIES_QUERY); 
  const [ selectedCategory, setSelectedCategory ] = useState<string>();

  if(loading) {
    return <div>Loading...</div>;
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
          { selectedCategory }
        </div>
      </CategoriesWrapper>
    );
  }
}

export default Categories;
