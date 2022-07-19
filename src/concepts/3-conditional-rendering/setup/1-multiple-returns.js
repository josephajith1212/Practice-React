import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState({})

  const getUser = async () => {
    try {
      const response = await fetch(url)
      if (response.status<200 || response.status>299) throw Error("Unable to fetch the data.")
      const user = await response.json()
      setUser(user)
      setIsLoading(false)
      // throw Error('abc')
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      setIsError(true)
    }
  }

  useEffect(() => {getUser()},[])
  if(isLoading) return <h3>Loading...</h3>
  if(isError) return <h3>Oops..there was an error!</h3>
  return <h2>{user.login}</h2>;
};

export default MultipleReturns;
