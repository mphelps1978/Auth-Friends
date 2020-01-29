import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import 'semantic-ui-css/semantic.min.css'
import { Button, Card, Image } from 'semantic-ui-react'

import '../App.css'

import FriendData from './FriendData'
import AddFriend from './AddFriend'

const Friends = props => {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
        // console.log(res)
        setFriends(res.data)
        console.log('friends: ', friends)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='container'>
      <div className='cards-container'>
        {friends.map(friend => (
          <FriendData key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  )
}

export default Friends
