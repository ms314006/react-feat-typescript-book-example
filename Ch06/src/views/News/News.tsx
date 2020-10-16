import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import NewsReader from './NewsReader';
import NewsList from './NewsList'; 
import NewsFrom from './NewsForm';
 
const News = () => {
  return( 
    <Switch>
      <Route
        exact
        path="/news"
        component={() => (
          <>
            <h1>這裡是最新消息</h1>
            <NewsFrom />
            <NewsList />
          </>
        )}
      />
      <Route
        path="/news/newsReader/:id"  
        component={NewsReader}
      />
    </Switch>
  );
};
 
export default News;
