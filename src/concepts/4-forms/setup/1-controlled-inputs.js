import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`Name: ${name}\tEmail: ${email}`)
  }
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
      </article>
    </>
  )
};

export default ControlledInputs;
