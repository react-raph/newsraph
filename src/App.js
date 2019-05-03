import React from 'react';
import './App.css';
import NewsHeader from './components/newsheader';
import ArticleDisplayer from './components/articledisplayer';

function App() {
  return (
    <div>
      <NewsHeader/>
      <ArticleDisplayer/>
    </div>
  );
}

export default App;
