import React from 'react';
import styled from 'styled-components';
import chucknorris from './static/chucknorris.png';
import './App.css';
import {NavLink, Route, Switch} from 'react-router-dom';
import Categories from './containers/Categories';
import HomePage from './components/HomePage';

function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        <TopBarWrapper>
          <NavLink to="/">
            <div className='logo-image'>
              <img width="60" src={chucknorris} alt="Chuck Norris" />
            </div>
          </NavLink>
          <div>
            <div className='logo-title'>Laugh Industry!</div>
            <div className='logo-description'>Chuck Norris will crack your ribs!!</div>
          </div>
        </TopBarWrapper>
      </header>

      <AppBodyWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
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
  padding: 5px;
  background: white;
  width: 100vw;
  border-bottom: 1px solid #8e8473;
  height: 60px;
  .logo-image {
    height: 60px;
    width: 60px;
    border-radius: 100%;
    overflow: hidden;
    background: #6b5735;
  }
  div {
    padding-left: 10px;
    color: #e0bd7e;
  }
  div.logo-title {
    display: flex;
    font-size: 1.5em;
    font-family: fantasy;
    color: #422b02;
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
  margin: 100px auto;
  border: 1px solid #e0dede;
  border-radius: 10px;
`;

export default App;
