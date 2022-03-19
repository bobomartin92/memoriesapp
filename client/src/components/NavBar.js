import {FaBars, FaUser} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const NavBar = ({ burger, setBurger }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user} = useSelector(state => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
        setBurger(false)
    }
    

  return (
        <nav className='mb-5 bg-white shadow-xl rounded-lg flex justify-between items-center p-3 lg:p-5'>
            <Link onClick={() => setBurger(false)} className='font-marker text-2xl tracking-wider uppercase hover:scale-105 hover:font-bold transition' to='/'>Memories</Link>
            <div className='hidden lg:flex'>
                    {user &&
                        <div className='flex justify-end items-center mr-10'>
                            <IconContext.Provider value={{ className: "text-blue-400 mr-2", size:'2rem'}}>
                                <div>
                                    <FaUser />
                                </div>
                            </IconContext.Provider>
                            <h3 className='font-bold text-green-500 text-lg'>{user.name}</h3>
                        </div>}
                    {!user ? <button onClick={() => setBurger(false)} className='bg-blue-400 py-1 px-3 text-white rounded-md hover:bg-blue-600 hover:font-bold transi'>
                        <Link to='/auth'>Sign In</Link>
                    </button> :
                    <button className='bg-red-400 py-1 px-3 text-white rounded-md hover:bg-red-600 hover:font-bold transi' onClick={onLogout}>Logout</button>}
            </div>
            <div className='lg:hidden'>
                    <IconContext.Provider value={{ className: "text-blue-400", size:'3rem' }}>
                        <div onClick={() => setBurger(!burger)}>
                            <FaBars />
                        </div>
                    </IconContext.Provider>
            </div>
            {burger && 
                <div className='text-right'>
                    {user &&
                        <div className='flex justify-end items-center mb-2'>
                            <IconContext.Provider value={{ className: "text-blue-400 mr-2"}}>
                                <div>
                                    <FaUser />
                                </div>
                            </IconContext.Provider>
                            <h3 className='font-bold text-green-500'>{user.name}</h3>
                        </div>}
                    {!user ? <button onClick={() => setBurger(false)} className='bg-blue-400 py-1 px-3 text-white rounded-md'>
                        <Link to='/auth'>Sign In</Link>
                    </button> :
                    <button className='bg-red-600 py-1 px-3 text-white rounded-md' onClick={onLogout}>Logout</button>}
                </div>
            }
        </nav>
  )
}

export default NavBar