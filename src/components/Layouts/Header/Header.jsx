import { ImageSena } from '../../UI/ImageSena/ImageSena'
import { Logo } from '../../UI/Logo/Logo'
import { Navbar } from '../../UI/NavBar/NavBar'
import { MiniFooter } from '../../UI/MiniFooter/MiniFooter'

import './Header.css'

export const Header = () => {
  return (
    <header className='header-page'>
      <Logo />
        <div className='Line-Logo'/>
      <Navbar />
      <ImageSena/>
      <MiniFooter/>
    </header>
  )
}
