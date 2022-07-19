import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [counter, setCounter] = useState(0)
  useEffect(()=>{document.title = `Value: ${counter}`})
  return (
    <>
      <h1>{counter}</h1>
      <button className='btn' onClick={() => setCounter((prevState) => prevState+1)}>Increase</button>
    </>
  )
};

export default UseEffectBasics;
