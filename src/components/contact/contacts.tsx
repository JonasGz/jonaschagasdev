import { Contact } from './components/contact'
import './contacts.scss'

export const Contacts = () => {

    return(
        <div className='contacts'>
            <Contact url='/assets/contacts/email.svg' name='E-mail' description='jonaschagasweb@gmail.com' />
            <Contact url='/assets/contacts/linkedin.svg' name='Linkedin' description='Linkedin' />
            <Contact url='/assets/contacts/instagram.svg' name='Instagram' description='@jonnaschagas' />
        </div>
    )
}