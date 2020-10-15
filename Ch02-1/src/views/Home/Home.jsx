import React from 'react';
import SayHello from '../../components/SayHello';

const names = ['world', null, 'noBody', 'air', 'water'];

const Home = () => ( 
  <div> 
    {
      names.map(name => <SayHello key={name} name={name} />)
    }
  </div>
);

export default Home;
