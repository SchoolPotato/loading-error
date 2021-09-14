import React, { useState, useEffect } from 'react';
import Loading from './Loading'
import Error from './Error';
const url = 'https://api.github.com/users/TruPotato';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('defaultUser');
  const [avatar, setAvatar] = useState('defaultAvatar');

  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((user)=>{
      const {login, avatar_url} = user 
      setUser(login);
      setAvatar(avatar_url);
      setIsLoading(false);
    })
    .catch((error)=>{
      console.log(error)
      (error) ? setIsError(true) : setIsError(false);
    });
  }, []);

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
    <img className="rounded" src={avatar} alt="it's me!" />
    <p>Hey, it worked!</p>
    <button onClick={() => {setIsError(true)}}>Press this button to error out.</button><br/>
    <button onClick={() => {setIsLoading(true)}}>Press this button to load indefinitely.</button>
  </div>;
};

export default MultipleReturns;
