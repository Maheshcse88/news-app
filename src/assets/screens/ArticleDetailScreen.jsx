import React from 'react';
import { useLocation } from 'react-router-dom';



const ArticleDetailScreen = () => {
  const location = useLocation();
  const { article, title} = location.state;

  if (!article) {
    return <div>No article data available</div>;
  }

  return (
    <div className="article-detail">
       <h1>{article.title}</h1>
       <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '3rem', marginTop: '4rem' }}>
       <img src={article.urlToImage} alt={article.title} style={{height: 500, width: 'auto', }}/>
       </div>
      <p>{article.content}</p>
      <p>{article.description}</p>
      <p style={{marginTop: '3rem', color: 'black'}}>Author: {article.author}</p>
      <p>PublishedAt: {article.publishedAt}</p>
    </div>
  );
};

export default ArticleDetailScreen;