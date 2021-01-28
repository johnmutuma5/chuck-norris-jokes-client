import React from 'react';
import {NavLink} from 'react-router-dom';
import {BorderedButton} from '../../common/styles';
import portrait from '../../static/chucknorris-potrait.png';
import {HeroBio, HeroContentWrapper, HeroDisclaimer, HeroTitle, HomePageWrapper} from './styles';

const HomePage: React.FC = (props) => {
  return (
    <HomePageWrapper>
      <HeroContentWrapper>
        <img width="150" src={portrait} alt="me" />
        <HeroTitle>
          Brace yourself!! Chuck Norris is coming your way!!!
        </HeroTitle>
        <HeroBio>
          Carlos Ray "Chuck" Norris is an American martial artist, actor, film producer, and screenwriter. After
          serving in the United States Air Force, Norris won many martial arts championships and later founded his own
          discipline Chun Kuk Do.
        </HeroBio>
        <HeroDisclaimer>
          This is an open, free to view collection and display of satirical factoids about Chuck Norris. 
        </HeroDisclaimer>
        <NavLink to='/categories'>
          <BorderedButton>
            Browse Categories
          </BorderedButton>
        </NavLink>
      </HeroContentWrapper>
    </HomePageWrapper>
  )
};

export default HomePage;
