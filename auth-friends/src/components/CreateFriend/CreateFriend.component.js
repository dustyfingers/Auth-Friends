import React, { useState } from 'react'
import axios from 'axios'
import { Redirect, withRouter } from 'react-router-dom'

const CreateFriend = () => {

    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = evt => {
        setFriend({ ...friend, [evt.target.name]: evt.target.value })
    };

    const createFriend = async evt => {
        evt.preventDefault();
        try {
            const token = localStorage.getItem('authToken');
            const context = {
                headers: {
                    Authorization: token
                }
            };
            await axios.post('http://localhost:5000/api/friends', { ...friend }, context);
            return (<Redirect to="/api/friends" />);
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <div>
            CREATE FRIEND COMPONENT
            <form onSubmit={createFriend}>
                Friend's Name:
                <input
                    type="text"
                    name="name"
                    value={friend.name}
                    onChange={evt => handleChange(evt)} />
                Friend's Age:
                <input
                    type="number"
                    name="age"
                    value={friend.age}
                    onChange={evt => handleChange(evt)} />
                Friend's Email:
                <input
                    type="email"
                    name="email"
                    value={friend.email}
                    onChange={evt => handleChange(evt)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default withRouter(CreateFriend)
