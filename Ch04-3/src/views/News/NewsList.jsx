import React from 'react';
import { Link } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { deleteNews } from '../../actions/news';
 
const NewsList = () => { 
  const dispatch = useDispatch();
  return (
    <ul>
      {
        useSelector(state => state.news.news).map(theNews => (
          <li key={theNews.id}>
            <Link
              to={`/news/newsReader/${theNews.id}`}
            >
              {theNews.name}
            </Link> 
            <button onClick={() => { dispatch(deleteNews(theNews.id)); }}>
              刪除
            </button>
          </li>
        ))
      }
    </ul>
  );
}
  
export default NewsList;

