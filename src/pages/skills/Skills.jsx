import styles from './skills.module.css';

const Skills = () => {
    return (
        <section className={ styles.skills }>
            <h1 className={ `txt-shadow-solid ${styles.title}` }>
                Skills
            </h1>
        </section>
    );
};

export { Skills };