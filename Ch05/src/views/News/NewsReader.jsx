import React from 'react';
import { useParams } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
 
const NewsReader = () => {  
  const { id: targetNewsId } = useParams();
  const news = useSelector(state => state.news.news);
  const targetNews = news.find(theNews => (
    String(theNews.id) === String(targetNewsId)
  ));

  return (
    <div>
      <h1>您正在閱讀 {targetNews.name}</h1>
      <p>{targetNews.describe}</p>
    </div>
  );
};

export default NewsReader;
