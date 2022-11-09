import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component Imports
import Header from './components/Header';
import TopStories from './components/TopStories';
import ArticleSearch from './components/ArticleSearch';
import Footer from './components/Footer';
import RandomArticle from './components/RandomArticle';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<TopStories />} />
          <Route path='/search' element={<ArticleSearch />} />
          <Route path='/random' element={<RandomArticle />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
