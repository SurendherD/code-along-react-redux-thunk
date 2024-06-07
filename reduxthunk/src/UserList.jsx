// src/components/UserList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './userActions';

const UserList = () => {
    const userState = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleFetchUsers = () => {
        dispatch(fetchUsers());
    };

    return (
        <div>
            <button onClick={handleFetchUsers}>Fetch Data</button>
            {userState.loading && <p>Loading...</p>}
            {userState.error && <p>{userState.error}</p>}
            <ul>
                {userState.users.map(user => (
                    <li key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
