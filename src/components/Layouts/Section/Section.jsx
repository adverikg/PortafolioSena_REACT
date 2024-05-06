
import './Section.css'
import { Containers } from '../../UI/Container/Containers.jsx'
import {Tittles} from '../../UI/Tittles/Tittles';
export const Section = () => {
  return (
    <section className='section'>
      <Tittles>
        <img src="src\assets\imgs\SENA.png" className='ImgDIVWidth' />
        <h2>PERFIL</h2>
      </Tittles>
      <Containers>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident numquam blanditiis animi reprehenderit quam sint, enim est iusto distinctio omnis dolor, quisquam itaque! Ipsa, necessitatibus reiciendis sit rem perspiciatis quas.</p>
      </Containers>
      
    </section>
  )
}
