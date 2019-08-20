import React, { useState, useEffect } from 'react'
import axios from 'axios'

import FriendCard from '../FriendCard/FriendCard.component';
import './Friends.styles.sass'

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        getFriends()
    }, []);

    const getFriends = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const context = {
                headers: {
                    Authorization: token
                }
            };
            let { data } = await axios.get('http://localhost:5000/api/friends', context);
            setFriends(data);
            console.log(data);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div>
            FRIENDS COMPONENT
            {friends.map(friend => (
                <FriendCard key={friend.id} friend={friend} />
            ))}
        </div>
    );
}

export default Friends
