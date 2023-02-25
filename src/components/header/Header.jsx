import { ThemeToggleButton } from '../';
import styles from './header.module.css';

const Header = () => {
    return (
        <header>
            <div className={ styles.socialsContainer }>
                Socials
            </div>
            <ThemeToggleButton />
        </header>
    );
};

export { Header };