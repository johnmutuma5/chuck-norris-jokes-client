import React from 'react';
import styled from 'styled-components';
import chucknorris from './static/chucknorris.png';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Categories from './components/categories';

function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        <TopBarWrapper>
          <img src={chucknorris} alt='Chuck Norris' />
          <div>
            <div className='logo-title'>Laugh Industry!</div>
            <div className='logo-description'>Chuck Norris will crack your ribs!!</div>
          </div>
        </TopBarWrapper>
      </header>

      <AppBodyWrapper>
        <Switch>
          <Route exact path="/categories" component={Categories} />
        </Switch>
      </AppBodyWrapper>
    </React.Fragment>
  );
}

const TopBarWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  background: #422b02;
  width: 100vw;
  height: 60px;
  img {
    height: 100%;
    width: 75px;
  }
  div {
    padding-left: 10px;
    color: #e0bd7e;
  }
  div.logo-title {
    display: flex;
    font-size: 1.5em;
    font-family: fantasy;
    color: white;
    font-weight: bold;
    align-items: center;
  }
  div.logo-description {
    font-size: .75em;
    font-style: italic;
  }
`;


const AppBodyWrapper = styled.main`
  width: 85%;
  margin: 75px auto;
  border: 1px solid #e0dede;
  border-radius: 10px;
`;

export default App;
