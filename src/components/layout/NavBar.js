import React from 'react'
import { Link } from 'react-router-dom'
import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink'

const NavBar = () => {
    return (
        <nav className='bg-gray-700 p-7 px-20'>
            <div className="container flex justify-between">
                <Link to='/' className='text-white text-xl'>Firebase App</Link>
                <SignInLink />
                <SignOutLink />
            </div>
        </nav>
    )
}

export default NavBar