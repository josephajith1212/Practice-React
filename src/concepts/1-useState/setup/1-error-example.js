import React, {useState} from 'react';

const ErrorExample = () => {
  const [title, setTitle] = useState("Random title")
  const handleClick = () => {
    setTitle(title === "Random title" ? "Title changed" : "Random title")
  }
  return (
    <div className='container'>
      <h2>{title}</h2>
      <button className='btn' onClick={handleClick}>Change title</button>
    </div>
  )
};

export default ErrorExample;
