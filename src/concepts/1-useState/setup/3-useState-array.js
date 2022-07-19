import React from 'react';
import {useState} from 'react';
import {data} from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const deleteItem = (id) => {
    setPeople(people.filter(each => each.id != id))
  }
  return <>
    {people.map(person => {
      const {id, name} = person
      return (
        <div className='item' key={id}>
          <h4>{name}</h4>
          <button className='btn' onClick={()=>deleteItem(id)}>Delete</button>
        </div>
      )
    })}
    <button className='btn' onClick={()=>setPeople([])}>Clear all</button>
  </>
};

export default UseStateArray;
