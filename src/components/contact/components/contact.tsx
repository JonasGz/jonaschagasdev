import './contact.scss'

type ContactProps = {
    url: string;
    name: string;
    description: string;
}

export const Contact = (props : ContactProps) => {

    return(
        <div className='contact'>
            <img src={props.url} alt={props.name} title={props.name} />
            {/* <h3>{props.name}</h3> */}
            <span>{props.description}</span>
        </div>
    )
}