import React from 'react'

import '../App.css';

import 'semantic-ui-css/semantic.min.css'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const FriendData = (props) => {
  console.log(props);

  function deleteCard(id) {
    console.log('ID Being Passed? ', id)
    axiosWithAuth()
    .delete('api/friends/id:', id)
    .then(res =>{
      console.log(res);
      this.forceUpdate();

    })
    .catch(err =>{
      console.log(err);

    })

  }

const url= props.friend.imageURL

  return(
    <div className='card'>
    <p className='delete' onClick={() => deleteCard(props.friend.id)}>❌</p>
      {/* <img src={require(url)} /> */}
      <p>{props.friend.name}</p>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
    </div>
  )
}

export default FriendData