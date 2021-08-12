import React from 'react';

export default function InputForm(props) {
  return (
      <input 
        key={props.name}        
        name={props.name}
        placeholder={props.placeholder}        
        type={props.type}
      />
  );
}
