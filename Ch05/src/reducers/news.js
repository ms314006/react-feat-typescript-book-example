const initialState = {
  news: [
    { id: 1, name: '第一筆最新消息', describe: '這裡是第一筆哦！' },
    { id: 2, name: '第二筆最新消息', describe: '這裡是第二筆哦！' },
    { id: 3, name: '第三筆最新消息', describe: '這裡是第三筆哦！' },
  ],
};
 
const news = (state = initialState, action) => {
  switch (action.type) { 
    case 'ADD_NEWS':
      return {
        ...state,
        news: [
          ...state.news,
          action.payload.news,
        ],
      }; 
    case 'DELETE_NEWS':
      return {
        ...state,
        news: state.news.filter(
          theNews => theNews.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
 
export default news;
