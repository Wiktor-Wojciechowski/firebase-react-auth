import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { auth } from '../firebase'

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        console.log(auth.currentUser)

        return () => {

        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(() => {
            navigate('/')
        })
            .catch((error) => {
                console.log(error.message)
            })

    }


    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
                <button>Submit</button>
            </form>
            <Link to="/register">Register</Link>
        </div>
    )
}
