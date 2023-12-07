import './MainNavigation.css'
import { NavLink } from 'react-router-dom'

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul className='navber'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}
              end='true'
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/bookmarks'
              className={({ isActive }) => (isActive ? 'active' : '')}
              end='true'
            >
              Bookmarks
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
