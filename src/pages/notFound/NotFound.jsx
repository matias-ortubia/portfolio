import styles from './notFound.module.css';

const NotFound = () => {
    return (
        <section className={ styles.notFoundPage }>
            <h1 className={ styles.title }>
                Oops!
            </h1>
            <div>
                <p className={ styles.text }>We couldn't find the requested page.</p>
                <p className={ styles.text }>Sorry for the inconvenience.</p>
            </div>
        </section>
    );
};

export { NotFound };