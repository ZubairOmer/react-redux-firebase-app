import React from 'react'
import { NavLink } from 'react-router-dom'

const SignInLink = () => {
    return (
        <ul className='flex space-x-10 text-white'>
            <li><NavLink to='/'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='rounded-full bg-white text-gray-500 p-3'>ZO</NavLink></li>
        </ul>
    )
}

export default SignInLink