import React from 'react';
 
type JustCoolButtonProps = {
  style: any
  className: string
}

const JustCoolButton = ({ style, className }: JustCoolButtonProps) => (
  <button
    type="button"
    style={style}
    className={className}
    onClick={() => { console.log('I am a cooooool button!'); }}
  >
    I am a coooooool button
  </button>
);
 
export default JustCoolButton;
