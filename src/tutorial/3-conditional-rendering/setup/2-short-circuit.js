import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('Isaac')
  const[isError, setIsError] = useState(false)
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
      {/*<h1>{firstValue}</h1>
  <h1>value: {secondValue}</h1>*/}
      {text && <h1>Hello world</h1>}
      <button className='btn' onClick={()=> setIsError(!isError)}>toggle error</button>
      {isError && <h1>Error...</h1>}
      {isError ? <p> There is an error </p>: 
      <div>
        <h2>There is no error</h2> 
      </div>
      
      }
    </>
  )
};

export default ShortCircuit;
