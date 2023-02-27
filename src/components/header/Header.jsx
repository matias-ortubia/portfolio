import { ThemeToggleButton, GithubIcon, LinkedinIcon, TwitterIcon } from '../';
import styles from './header.module.css';

const Header = () => {
    return (
        <header>
            <div className={ styles.socialsContainer }>
                <a href="https://github.com/matiasortubia/" target="_blank">
                    <GithubIcon className="color-icon-primary" size="2.7rem" />
                </a>
                <a href="https://www.linkedin.com/in/matiasortubia/" target="_blank">
                    <LinkedinIcon className="color-icon-primary" size="2.7rem" />
                </a>
                <a href="https://twitter.com/MatiRtb" target="_blank">
                    <TwitterIcon className="color-icon-primary" size="2.7rem" />
                </a>
            </div>
            <ThemeToggleButton />
        </header>
    );
};

export { Header };