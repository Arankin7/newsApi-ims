import logo from './logo.svg';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
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
      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          Sort
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Alphabetically</Dropdown.Item>
          <Dropdown.Item>Publication Date</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

        <TopStories></TopStories>
        

        <ArticleSearch></ArticleSearch>
      </main>

        <Footer></Footer>
    </div>
  );
}

export default App;
