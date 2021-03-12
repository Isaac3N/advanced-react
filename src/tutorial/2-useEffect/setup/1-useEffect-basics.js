import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(()=>{
    console.log('this is a use effect')
    if (value > 0)
    {document.title = (`This is the ${value} message`)}
  }, [value])
  useEffect(()=> {
    console.log('hello world')
  }, [])
  console.log('rendered component')
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={()=> {
        setValue(value+1)
      }}>Click me</button>
    </>
    );
};

export default UseEffectBasics;
