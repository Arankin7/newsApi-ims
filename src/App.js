import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SortProvider } from './sortContext';
import './App.css';

// Component Imports
import Header from './components/Header';
import TopStories from './components/TopStories';
import ArticleSearch from './components/ArticleSearch';
import Footer from './components/Footer';

// Enter your api Key here!!!
export const apiKey = '';

let topBtn = document.getElementById("topBtn");

window.onscroll = function(){ScrollBtn()};

function ScrollBtn() {

  if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
    topBtn.style.display = "block";
  }
  else
  (
    topBtn.style.display = "none"
  )
}

function ToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

function App() {
  return (
    <div className="App">
      <SortProvider>
        <BrowserRouter>
          <Header /> 
          <button onClick={ToTop} id="topBtn" title='Go to Top of page'>Top</button>
          <Routes>
            <Route path='/' element={<TopStories />} />
            <Route path='/search' element={<ArticleSearch />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </SortProvider>
    </div>
  );
}

export default App;
