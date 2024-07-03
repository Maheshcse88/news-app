import React, { useState, useEffect } from 'react';
import NewsItem from '../components/NewsItem';
import FetchNews from '../components/FetchNews';
import ArticleDetailScreen from './ArticleDetailScreen';

const HomeScreen = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const newsArticles = await FetchNews();
      setArticles(newsArticles);
    };
    loadNews();
  }, []);
  console.log(articles)


  return (
    <div className="home-screen">
        <h1 style={{marginBottom: '4rem', textDecoration: 'underLine'}}>News HeadLines: </h1>
      {articles.map((article, index) => (
        <NewsItem key={index} article={article} index={index} />
      ))}
    </div>
  );
};

export default HomeScreen;