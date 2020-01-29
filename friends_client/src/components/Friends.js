import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

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
    <div>
      {friends.map(friend => (
        <p>{friend.name}</p>
      ))}
    </div>
  )
}

export default Friends
