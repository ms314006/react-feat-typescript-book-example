const setUser = user =>({
  type: 'SET_USER',
  payload: { user },
});
 
export const fetchUser = () => async (dispatch) => {
  const response = await fetch('http://httpbin.org/get');
  const user = await response.json();
  dispatch(setUser(user));
};
