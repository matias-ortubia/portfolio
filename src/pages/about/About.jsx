import styles from './about.module.css';
import { SkillsContainer } from '../../components';

const About = () => {
    return (
        <section className={ styles.about }>
            <div className={ styles.container }>
                <h1 className={ `txt-shadow-solid ${styles.title}` }>About me</h1>
                <p className={ styles.text }>
                    Nice to meet you! My name is Matías Ortubia, and I'm a 
                    <span className={ styles.textHighlight }> Fullstack Web Developer </span> 
                    from
                    <span className={ styles.textHighlight }> Buenos Aires, Argentina.</span> 
                </p>
                <p className={ styles.text }>
                    During my studies in Electronic Engineering, I found my 
                    passion in programming. Since then, I've been taking web 
                    development courses and studying on my own.
                </p>
                <h1 className={ `txt-shadow-solid ${styles.subtitle}` }>Skills</h1>
                <SkillsContainer />
            </div>
        </section>
    );
};

export { About };