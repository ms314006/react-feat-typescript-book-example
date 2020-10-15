import React from 'react'; 

const SayHello = (props) => (
  <div 
    style={
      props.name === null ? { color: '#fff', background: '#000' } : {}
    }
  >
    {`Hello ${props.name === null ? 'noBody' : props.name}!`}
  </div>
);

export default SayHello;
