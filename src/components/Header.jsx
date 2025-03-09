import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='bg-blue-400 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold italic text-sm sm:text-xl flex flex-wrap skew-x-6'>
            <span className='text-slate-900'>Prime</span>
            <span className='text-red-500'>Horizon</span>
          </h1>
        </Link>
        <form className='bg-slate-200 p-3 rounded-lg flex items-center'>
          <input type='text' placeholder='Find...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-slate-400'/>
        </form>
        <ul className='flex gap-5'>
          <Link to='/'>
            <li className='hidden sm:inline text-white hover:underline'>
              Home
            </li>
          </Link>
          <Link to ='/about'>
            <li className='hidden sm:inline text-white hover:underline'>
              About
            </li>
          </Link>
          <Link to = '/Sign-in'>
            <li className='text-white hover:underline'>
              Sign in
              </li>
          </Link>
        </ul>
      </div>
    </header>
  )
}

export default Header


