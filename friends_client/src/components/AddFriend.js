import React, { useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const AddFriend = (props) => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [quote, setQuote] = useState('')


  const addNewFriend = e => {
    e.preventDefault();
    e.target.reset()

    const newFriend = {
      id: Date.now(),
      name,
      age,
      email,
      quote
    }
    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then(res => {
        console.log(res);
        props.history.push('/members')

      })
      .catch(err => {
        console.log(err);
      });
  };


  return(
    <div className="addForm">
     <form onSubmit={addNewFriend}>
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            placeholder="Age"
            type="number"
            name="age"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
            <input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
            <input
            placeholder="Enter a Quote"
            type="text"
            name="quote"
            value={quote}
            onChange={e => setQuote(e.target.value)}
          />
          <button>Join the Gang!</button>
        </form>
    </div>
  )
}

export default AddFriend