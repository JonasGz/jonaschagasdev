import './experience.scss'

type ExperienceProps = {
    name: string;
    period: string;
    enterprise: string;
    description: string;
}

export const Experience = (props : ExperienceProps) => {

    return(
        <div className='experience'>
            <div className='experience__container'>
                <div className='experience__header'>
                    <div className='experience__header-title'>
                        <h4 className='experience__name'>{props.name}</h4>
                        <span className='experience__period'>
                        {props.period}
                        </span>
                    </div>
                    <span className='experience__enterprise'>{props.enterprise}</span>
                </div>
                <p className='experience__description'>{props.description}</p>
            </div>
        </div>
    )
}