import React from 'react';

export default function Buttons(props) {
  return (
    
      <input 
        key={props.name}        
        value={props.name}
        placeholder={props.placeholder}       
        type={props.type} 
        style={{backgroundColor: props.color}}
      />
  );
}
