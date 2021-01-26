import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {BorderedButton} from '../../containers/RandomJoke/styles';
import portrait from '../../static/chucknorris-potrait.png';

const HomePage: React.FC = (props) => {
  return (
    <HomePageWrapper>
      <div className='hero-content'>
        <img width="150" src={portrait} alt="me" />
        <p className='hero-title'>
          Brace yourself!! Chuck Norris is coming your way!!!
        </p>
        <p className='hero-bio'>
          Carlos Ray "Chuck" Norris is an American martial artist, actor, film producer, and screenwriter. After
          serving in the United States Air Force, Norris won many martial arts championships and later founded his own
          discipline Chun Kuk Do.
        </p>
        <p className='disclaimer'>
          This is an open, free to view collection and display of satirical factoids about Chuck Norris. 
        </p>

        
        <NavLink to='/categories'>
          <BorderedButton>
            Browse Categories
          </BorderedButton>
        </NavLink>
      </div>
    </HomePageWrapper>
  )
};

const HomePageWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
  .hero-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255,255,255,.9);
    padding: 50px 150px;
    .hero-title {
      color: #a5731a;
      font-size: 2em;
      font-weight: bold;
      font-family: fantasy;
    }
    .hero-bio {
      font-size: 14px;
      color: #694609;
    }
    .disclaimer {
      font-size: 12px;
      font-weight: bold;
    }
  }
`;

export default HomePage;
