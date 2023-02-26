import { ThemeToggleButton, GithubIcon, LinkedinIcon, TwitterIcon } from '../';
import styles from './header.module.css';

const Header = () => {
    return (
        <header>
            <div className={ styles.socialsContainer }>
                <button>
                    <GithubIcon className="color-icon-primary" size="2.7rem" />
                </button>
                <button>
                    <LinkedinIcon className="color-icon-primary" size="2.7rem" />
                </button>
                <button>
                    <TwitterIcon className="color-icon-primary" size="2.7rem" />
                </button>
            </div>
            <ThemeToggleButton />
        </header>
    );
};

export { Header };