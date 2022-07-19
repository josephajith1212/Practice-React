import React, { useState } from 'react';

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0)
  const action = (e) => {
    var operation = e.target.name
    setTimeout(() => {return setCounter((prevState) => { return (operation === "decrease") ? prevState - 1 : (operation === "increase") ? prevState + 1 : 0})},1000)
  }
  return (
    <>
      <section style={{margin: '4rem 0'}}>
        <h2>Simple Counter</h2>
        <h1>{counter}</h1>
        <button className='btn' onClick={()=>setCounter(counter-1)}>Decrease</button>
        <button className='btn' onClick={() =>setCounter(0)}>Reset</button>
        <button className='btn' onClick={() =>setCounter(counter+1)}>Increase</button>
      </section>
      <section>
        <h2>Complex Counter</h2>
        <h1>{counter}</h1>
        <button className='btn' name='decrease' onClick={action}>Decrease</button>
        <button className='btn' name='reset' onClick={action}>Reset</button>
        <button className='btn' name='increase' onClick={action}>Increase</button>

      </section>
    </>
  )
};

export default UseStateCounter;
