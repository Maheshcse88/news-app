import axios from 'axios';

const FetchNews = async () => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=6e62005be61d4e7caff426db17183fab');
    return response.data.articles;
    
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

export default FetchNews;