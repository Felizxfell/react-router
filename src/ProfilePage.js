import React from 'react'
import { useAuth } from './auth';

const ProfilePage = () => {
    const auth = useAuth()    

    return (
        <>
            <div>ProfilePage</div>
            <p>Hola {auth.user.username}</p>
        </>
    )
}

export default ProfilePage;
