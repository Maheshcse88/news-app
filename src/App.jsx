import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './assets/screens/HomeScreen';
import ArticleDetailScreen from './assets/screens/ArticleDetailScreen';
import FetchNews from './assets/components/FetchNews';

import './App.css'

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const newsArticles = await FetchNews();
      setArticles(newsArticles);
    };
    loadNews();
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/article/:id' element={<ArticleDetailScreen/>}/>
      </Routes>
    </div>
  );
}

export default App
