import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriends from './AddFriends';
import '../App.css'

const Friends = () => {
    const [friends, setFriends] = useState([]);

    const [edit, setEdit] = useState({
        isEditing: false,
        id:'',
        name:'',
        age:'',
        email:''
    });

    const updateFriendsList = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res);
            setFriends(res.data);
        });
    };

    useEffect(() => {
        updateFriendsList();
    }, []);

    const handleDelete = id => {
        axiosWithAuth()
        .delete(`/friends/${id}`)
        .then(res => {
            updateFriendsList();
        })
        .catch(err => console.log(err));
    };

    const handleEdit = friend => {
        setEdit({
            isEditing: true,
            id: friend.id,
            name: friend.name,
            age: friend.age,
            email:friend.email
        });
    };

    const handleChange = e => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('edit', edit);
        const changeFriend = {
            id: edit.id,
            name: edit.name,
            age: edit.age,
            email: edit.email
        };
        axiosWithAuth()
        .put(`/friends/${edit.id}`, changeFriend)
        .then(res => {
            updateFriendsList()
            setEdit({
                ...edit,
                isEditing: false
            });
        })
        .catch(err => console.log(err));
    };

    return (
        <div className="friend-container">
            <AddFriends updateFriendsList={updateFriendsList} />
            {edit.isEditing ? (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type='text'
                        name='name'
                        placeholder='name'
                        value={edit.name}
                        onChange={handleChange}
                    />

                    <input
                        type='text'
                        name='age'
                        placeholder='age'
                        value={edit.age}
                        onChange={handleChange}
                    />

                    <input
                        type='text'
                        name='email'
                        placeholder='email'
                        value={edit.email}
                        onChange={handleChange}
                    />
                    <button type='submit'>Add Friend</button>
                </form>
            ) : (
                friends.map(friend => {
                    return (

                      <div className='card-cont'>
                        <div className='card-grid'>
                          <div className='card'>
                            <p>{friend.name}</p>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                            <button onClick={() => handleEdit(friend)}>Edit</button>
                            <button onClick={() => handleDelete(friend.id)}>Delete</button>
                          </div>
                        </div>
                      </div>
                    )
                })
            )}
        </div>
    );
};

export default Friends