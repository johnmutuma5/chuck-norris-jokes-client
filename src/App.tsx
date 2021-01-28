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
            <LogoImageWrapper>
              <img width="50" height="50" src={chucknorris} alt="Chuck Norris" />
            </LogoImageWrapper>
          </NavLink>
          <div>
            <LogoTitleWrapper>
              Laugh Industry!
            </LogoTitleWrapper>
            <LogoDescriptionWrapper>
              Chuck Norris will crack your ribs!!
            </LogoDescriptionWrapper>
          </div>
        </TopBarWrapper>
      </header>

      <AppBodyWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/categories/:id" component={Categories} />
        </Switch>
      </AppBodyWrapper>
    </React.Fragment>
  );
}

const LogoDescriptionWrapper = styled.div`
  font-size: .65em;
  font-style: italic;
  color: #e0bd7e;
`;

const LogoTitleWrapper = styled.div`
  display: flex;
  font-size: 1.25em;
  font-family: fantasy;
  color: #6b5735;
  font-weight: bold;
  align-items: center;
`;

const LogoImageWrapper = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  overflow: hidden;
  background: #6b5735;
  padding-right: 15px;
  margin: 0 12.5px 10px;
`;

const TopBarWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  padding: 2px;
  background: white;
  width: 100vw;
  box-shadow: 1px 1px 3px #8e8473;
`;


const AppBodyWrapper = styled.main`
  width: 85%;
  margin: 100px auto;
  border: 1px solid #b7b4ae;
  border-radius: 7.5px;
  overflow: hidden;
`;

export default App;
