import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const user = true
  return (
    <div className='mb-5'>
        <nav className='nav-bar'>
            <Link className='teko hover:scale-110' to='/'>Memories</Link>
            <div className='flex justify-around items-center'>
                {user && <div className='flex items-center mr-14'>
                        <div className='nav-avatar'>b</div>
                        <h3 className='text-2xl'>bodiseowei</h3>
                </div>}
                <button className='nav-btn'>
                    <Link to='/auth'>{user ? 'Logout' : 'Sign In'}</Link>
                </button>
            </div>
        </nav>
    </div>
  )
}

export default NavBar