 import { Dispatch } from 'redux';

const setUser = (user: any) =>({
  type: 'SET_USER',
  payload: { user },
});
 
export const fetchUser = () => async (dispatch: Dispatch) => {
  const response = await fetch('http://httpbin.org/get');
  const user = await response.json();
  dispatch(setUser(user));
};
