import styles from './header.module.css';

const Header = () => {
    return (
        <header>
            <div className={ styles.socialsContainer }>
                Socials
            </div>
            Theme
        </header>
    );
};

export { Header };