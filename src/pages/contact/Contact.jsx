import { ContactForm } from '../../components/contactForm/ContactForm.jsx';
import styles from './contact.module.css';

const Contact = () => {
    return (
        <section className={ styles.contact }>
            <div className={ styles.wrapper }>
                <h1 className={`txt-shad-solid-red ${styles.formTitle}`}>
                    Contact me
                </h1>
                <ContactForm />
            </div>
        </section>
    );
};

export { Contact };