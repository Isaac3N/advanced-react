import React, { useState } from 'react';
import {data} from '../../../data'

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const[people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people)=>{
      return people.filter((person) => person.id !== id)
    })
  }
  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson}/>
    </section>
  );
};
const List = (props) => {
  const {people, removePerson} = props
  return (
    <>
      {people.map((i)=> {
        return <SinglePerson key={i.id} {...i} removePerson={removePerson}/>
      })}
    </>
  )
}

const SinglePerson = (props) => {
  const {id,name, removePerson} = props 
  return (
    <div className="item">
      <h4>single item</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default PropDrilling;
