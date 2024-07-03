import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const NewsItem = ({ article, index }) => {
    const navigate = useNavigate()
  return (

  
    <div className="news-item" style={{marginBottom: '4rem'}}>   

        <img src={article.urlToImage} alt={article.title} style={{height: 500, width: 800}}/>
        <h2>{article.title}</h2>
       {/* <Link to={{ pathname: `/article/${index}`, state: { article } }}>Read more</Link>  */}
      
      <button 
      style={{border: 'none', outline: 'none', backgroundColor: 'white', color: 'blue', textDecoration: 'underLine'}}
      onClick={()=> navigate(`/article/${index}`, {state: { article }} )}>read more</button>   

    </div>
    
  );
};

export default NewsItem;