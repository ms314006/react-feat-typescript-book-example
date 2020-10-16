import React from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux'; 
import { deleteNews } from '../../actions/news';
 
const NewsList = props => (
  <ul>
    {
      props.news.map(theNews => (
        <li key={theNews.id}>
          <Link
            to={`/news/newsReader/${theNews.id}`}
          >
            {theNews.name}
          </Link> 
          <button onClick={() => { props.deleteNews(theNews.id); }}>
            刪除
          </button>
        </li>
      ))
    }
  </ul>
);

const mapStateToProps = state => ({ 
  news: state.news.news,
});
 
const mapDispatchToProps = dispatch => ({
  deleteNews: (id) => {
    dispatch(deleteNews(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
