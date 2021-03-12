import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(()=> {
    window.addEventListener('resize', checkSize)
    return()=> {
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    }
  })
  // a cleanup function is one where you have to remove the event listener that was added so as to
  // messy code when the useEffect is being rendered 
  return (
    <>
      <h1>Window</h1>
      <h2>{size}px</h2>
    </>
  );
};

export default UseEffectCleanup;
