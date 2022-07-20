import React, {useState, useEffect } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(`Name: ${name}\tEmail: ${email}`)
    if (name && email ){
      const person = {name, email, id: Date.now()}
      setPeople((prevState)=>[...prevState, person])
      setName('')
      setEmail('')
      
    }
  }

  useEffect(() => {
    console.log(people)
  }, [people])
  
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input id='firstName' name='firstName' value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <button className='btn' type='submit'>Add person</button>
        </form>

        {people.map((person) => {
          const {id, name, email} = person
          return (
            <div className='item' key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  )
};

export default ControlledInputs;
