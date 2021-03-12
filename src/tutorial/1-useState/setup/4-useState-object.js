import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'peter', 
    age:24, 
    message: 'default message'
  })
  const [name, setName] = useState('peter')
  const[age, setAge] = useState(23)
  const[message, setMessage] = useState('hello friend')
  
  const changeMessage = () => {
    //setPerson({...person, message:'hello world'})
    setMessage('This is a state message')
  }
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>change message</button>
    </>
  );
};

export default UseStateObject;
