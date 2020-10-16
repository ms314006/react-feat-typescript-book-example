export const addNews = news => (
  { type: 'ADD_NEWS', payload: { news } }
);
 
export const deleteNews = id => ({
  type: 'DELETE_NEWS',
  payload: { id },
});
