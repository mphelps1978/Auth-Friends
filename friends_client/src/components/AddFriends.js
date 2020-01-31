import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriends = props => {
    const [newFriend, setNewFriend] = useState({
        id: Date.now(),
        name:'',
        age:'',
        email:''
    })

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('./friends', newFriend)
        .then(res => {
            console.log(res);
            props.updateFriendsList();
        })
        .catch(err => console.log('err',err));
    };

    return (
        <div>
            <p>Add a friend</p>
            <form className='addfriend' onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input
                        type='text'
                        name='name'
                        placeholder='name'
                        value={newFriend.name}
                        onChange={handleChange}
                    />
                    <label htmlFor='age'>age</label>
                <input
                        type='text'
                        name='age'
                        placeholder='age'
                        value={newFriend.age}
                        onChange={handleChange}
                    />
                    <label htmlFor='email'>email</label>
                <input
                        type='text'
                        name='email'
                        placeholder='email'
                        value={newFriend.email}
                        onChange={handleChange}
                    />
                <button type="submit">Add Friend</button>
            </form>
        </div>
    );
};

export default AddFriends