import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setPerson] = useState({name:'',email:'',age:'', id:''})
  const [people, setPeople] = useState([]);

  const handleInputChange = (e) => {
    const inputName = e.target.name
    const inputValue = e.target.value
    setPerson((prevState) => {
      return {...prevState, [inputName]: inputValue}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.age) {
      setPerson((prevState) => {return {...prevState, id:Date.now()}})
      setPeople((prevState) => [...prevState, person])
      setPerson({name: '', email: '', age: ''})
    } else {
      console.log('empty values');
    }
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='name'>Name : </label>
            <input
              type='text'
              id='name'
              name='name'
              value={person.name}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
              value={person.age}
              onChange={handleInputChange}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person) => {
          const { id, name, email, age } = person;
          return (
            <div className='item' key={Number(id)}>
              <h4>{`${name} (${age})`}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
