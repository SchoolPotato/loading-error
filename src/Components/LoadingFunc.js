import React, { useState, useEffect } from 'react';
import Loading from './Loading'
import Error from './Error';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('defaultUser');

  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((user)=>{
      const {login} = user
      setUser(login);
      setIsLoading(false);
      setIsError(true);
    })
    .catch((error)=>{
      console.log(error)
      (error) ? setIsError(true) : setIsError(false);
    });
  })

  if (isError) {
    return (
      <div>
        <Error />
      </div>
    )
  }

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  return <div>
    <h1>{user}</h1>
  </div>;
};

export default MultipleReturns;
