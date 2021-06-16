import React from 'react'
import { NavLink } from 'react-router-dom'

const SignOutLink = () => {
    return (
        <ul className='flex space-x-10 text-white'>
            <li><NavLink to='/'>Signup</NavLink></li>
            <li><NavLink to='/'>Login</NavLink></li>
        </ul>
    )
}

export default SignOutLink