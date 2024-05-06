
import { Containers } from '../../UI/Container/Containers'
import { Section } from '../Section/Section'
import { Tittles } from '../../UI/Tittles/Tittles'
import { Card } from '../../UI/cards/Cards'
import { ReferenciaPersonal } from '../../UI/References/References'
import './Main.css'

export const Main = () => {
  return (
    <main className='main-page'>
      <Containers>
        <Section />
      </Containers>
      <Containers>
          <Tittles>
            <img src="src\assets\imgs\SENA.png" className='ImgDIVWidth' />
            <h2>PROYECTOS</h2>
          </Tittles>
      </Containers>
      <div className='car'>
      <Card
          imageUrl="src\assets\imgs\WinBeta.jpg"
          title="PROYECTO 1"
          description="Descripción de la tarjeta 1."
          link="#"
        />
        <Card
          imageUrl="src\assets\imgs\Win1983pcs.jpg"
          title="PROYECTO 2"
          description="Descripción de la tarjeta 1."
          link="#"
        />
        <Card
          imageUrl="src\assets\imgs\windows-95-aniversario-reasonwhy.es_.jpg"
          title="PROYECTO 3"
          description="Descripción de la tarjeta 1."
          link="#"
        />
        <Card
          imageUrl="src\assets\imgs\UltimateDoom_title.webp"
          title="PROYECTO 4"
          description="Descripción de la tarjeta 1."
          link="#"
        />
      </div>
      <Containers>
          <Tittles>
            <img src="src\assets\imgs\SENA.png" className='ImgDIVWidth' />
            <h2>REFERENCIAS</h2>
          </Tittles>
      </Containers>
      <div className="referencias">
      <ReferenciaPersonal/>
      <ReferenciaPersonal/>
      <ReferenciaPersonal/>
      </div>
      <Containers>
          <Tittles>
            <img src="src\assets\imgs\SENA.png" className='ImgDIVWidth' />
            <h2>EXPERIENCIA</h2>
          </Tittles>
      </Containers>
    
      


    </main>
  )
}
