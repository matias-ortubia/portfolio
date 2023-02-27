import styles from './contactForm.module.css';

const ContactForm = () => {
    return (
        <form className={styles.contactForm}>
            <label htmlFor="name">Name</label>
            <input className={ styles.formInput }
                   id="name"
                   name="name"
                   maxLength="50" />
            <label htmlFor="email">Email</label>
            <input className={ styles.formInput }
                   id="email"
                   name="email"
                   minLength="5"
                   maxLength="50" />
            <label htmlFor="subject">Subject</label>
            <input className={ styles.formInput }
                   id="subject"
                   name="subject"
                   minLength="3"
                   maxLength="50" />
            <label htmlFor="message">Message</label>
            <textarea id="message"
                      name="message" 
                      maxLength="500"
                      className={ styles.textArea } />
            <button type="submit" className={ styles.submitButton }>
                Submit
            </button>
        </form>
    );
};

export { ContactForm };