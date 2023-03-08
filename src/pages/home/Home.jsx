import { LinkedinIcon, TwitterIcon, GithubIcon } from '../../components';
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
            <div class={ styles.socialsContainer }>
                <div className={ styles.line } />
                    <a href="https://github.com/matiasortubia/" target="_blank">
                        <GithubIcon className="color-icon-secondary" size="4rem" />
                    </a>
                    <a href="https://www.linkedin.com/in/matiasortubia/" target="_blank">
                        <LinkedinIcon className="color-icon-secondary" size="4rem" />
                    </a>
                    <a href="https://twitter.com/MatiRtb" target="_blank">
                        <TwitterIcon className="color-icon-secondary" size="4rem" />
                    </a>
                <div className={ styles.line } />
            </div>
        </section>
    );
};

export { Home };