import { Experience } from './components/experience'
import './experiences.scss'

export const Experiences = () => {

    return(
        <div className='experiences'>
            <div className='experiences__items'>
                <Experience name='Desenvolvedor Front-end' enterprise='DevHat' period='NOV/24 - ABR/25' description='Aqui vai uma pequena descrição sobre o projetos e as ferramentas.' />
                <Experience name='Desenvolvedor Front-end' enterprise='DevHat' period='NOV/24 - ABR/25' description='Aqui vai uma pequena descrição sobre o projetos e as ferramentas.' />
            </div>
        </div>
    )
}