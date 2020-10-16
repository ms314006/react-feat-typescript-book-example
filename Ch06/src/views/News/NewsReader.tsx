import React from 'react';
import { useParams } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import { News } from '../../reducers/news';
import { RootState } from '../../store';
 
const NewsReader = () => {  
  const { id: targetNewsId } = useParams();
  const news: News[] = useSelector((state: RootState) => state.news.news);
  const targetNews: News = news.find((theNews: News) => (
    String(theNews.id) === String(targetNewsId)
  )) as News;

  return (
    <div>
      <h1>您正在閱讀 {targetNews.name}</h1>
      <p>{targetNews.describe}</p>
    </div>
  );
};

export default NewsReader;
