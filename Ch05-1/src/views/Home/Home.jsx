import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../actions/user';
 
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <>
      <h1>這裡是首頁</h1>
      <div>
        {JSON.stringify(useSelector(state => state.user.user))}
      </div>
    </>
  )
};

export default Home;
