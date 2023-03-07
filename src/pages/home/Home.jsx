import styles from './home.module.css';

const Home = () => {
    return (
        <section className={ styles.home }>
            <div className={ styles.titleContainer }>
                <h1 className={ `txt-shadow-solid ${styles.name}` }>
                    Hi! I'm Matías
                </h1>
                <h2 className={ styles.title }>
                    Web Developer
                </h2>
            </div>
        </section>
    );
};

export { Home };