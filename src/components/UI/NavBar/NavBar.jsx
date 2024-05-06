
import {ItemNavbar} from '../ItemNavBar/ItemNavbar.jsx'
import './NavBar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <ItemNavbar style='nav-links' content='Perfil' />
        <ItemNavbar style='nav-links' content='Projectos' />
        <ItemNavbar style='nav-links' content='Referencia' />
        <ItemNavbar style='nav-links' content='Experencia' />
      </ul>
    </nav>
  )
}
