import './tech.scss'

type TechProps = {
    url: string;
    name: string;
}

export const Tech = (props : TechProps) => {

    return(
        <div className='tech'>
            <img src={props.url} alt={props.name} title={props.name} width={24} height={24} />
        </div>
    )
}