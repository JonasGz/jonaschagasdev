import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Tech } from './components/tech/tech'
import './technologies.scss'
import { useWorkScroll } from '../../hooks/use-work-scroll'

export const Technologies = () => {

    const {containerRef, handleNext, handlePrev} = useWorkScroll();

    return(
        <div className='technologies'>
          <ChevronLeft size={28} onClick={handlePrev} className="technologies__btn" color="white" />
            <div ref={containerRef} className='technologies__items'>
                <Tech url='/assets/icons/jsIcon.svg' name='javascript' />
                <Tech url='/assets/icons/tsIcon.svg' name='typescript' />
                <Tech url='/assets/icons/reactIcon.svg' name='react' />
                <Tech url='/assets/icons/nextjsIcon.svg' name='nextjs' />
                <Tech url='/assets/icons/flutterIcon.svg' name='flutter' />
            </div>
          <ChevronRight size={28} onClick={handleNext} className="technologies__btn" color="white" />
        </div>
    )
}