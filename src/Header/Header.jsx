import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className="header">
      <div className='container'>
       
          <div className='logo'>
                <Link to='/'>Movies</Link>
          </div>
            <div>
            <ul className='nav-links'>
                <li>
                <Link to="/">WatchList</Link>
                </li>
                <li>
                <Link to="/watched">Watched</Link>
            </li>
            <li>
                <Link className='btn' to="/add">Add</Link>
            </li>
            </ul>
            </div>
       
      </div>
    </div>
  )
}

export default Header
