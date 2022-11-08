import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component Imports
import Header from './components/Header';
import TopStories from './components/TopStories';
import ArticleSearch from './components/ArticleSearch';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <header>
        <Header></Header>
      </header>
      
      <main>
        <TopStories></TopStories>

        <ArticleSearch></ArticleSearch>
      </main>

        <Footer></Footer>
    </div>
  );
}

export default App;
