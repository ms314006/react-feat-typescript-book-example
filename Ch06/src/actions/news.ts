import { News } from '../reducers/news';

interface AddNewsPayload {
  news: News
};
 
interface AddNews {
  type: 'ADD_NEWS'
  payload: AddNewsPayload
};

export const addNews = (news: News): AddNews => (
  { type: 'ADD_NEWS', payload: { news } }
);

interface DeleteNewsPayload {
  id: number
};
 
interface DeleteNews {
  type: 'DELETE_NEWS'
  payload: DeleteNewsPayload
};

export const deleteNews = (id: number): DeleteNews => ({
  type: 'DELETE_NEWS',
  payload: { id },
});
 
export type NewsActionTypes = AddNews | DeleteNews;
