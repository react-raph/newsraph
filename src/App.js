import React from 'react';
import './App.css';
import NewsHeader from './components/newsheader';
import ArticleDisplayer from './components/articledisplayer';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Settings from './components/settings';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={
            () => (
              <div>
                <NewsHeader/>
                <ArticleDisplayer/>
              </div>
            )
          }>
          </Route>

          <Route exact path="/settings" render={
            () => (
              <div>
                <Settings/>
              </div>
            )
          }/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
