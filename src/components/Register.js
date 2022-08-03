import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../contexts/AuthContext';

export default function Register() {

    const { two, currentUser } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        console.log(two, currentUser)
    })


    const handleSubmit = async (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(email, password).then(() => {
            navigate('/')
        })
            .catch((error => {
                console.log(error.message);
            }))

    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
                <button>Submit</button>
            </form>
            <Link to="/login">Log In</Link>
        </div>
    )
}
