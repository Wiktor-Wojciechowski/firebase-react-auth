import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

//import context to use its functions and vars
import { useAuth } from '../contexts/AuthContext'

import { useNavigate } from "react-router-dom";

export default function Home() {
    const navi = useNavigate();
    //use vars and funcs from imported context
    const { currentUser, logout } = useAuth();

    useEffect(() => {
        console.log(currentUser)
    })

    const handleClick = () => {
        logout()
        console.log(currentUser)

    }

    return (
        <div>
            <Link to="/login">Log in</Link>
            <Link to="/register">Register</Link>
            <button onClick={handleClick}>Log Out</button>
        </div>
    )
}
