import styles from './skills.module.css';
import { SkillsContainer } from '../../components';

const Skills = () => {
    return (
        <section className={ styles.skills }>
            <div className={ styles.container }>
                <h1 className={ `txt-shadow-solid ${styles.title}` }>About me</h1>
                <p className={ styles.text }>
                    Nice to meet you! My name is Matías Ortubia, and I'm a 
                    <span className={ styles.textHighlight }> Full Stack Web Developer </span> 
                    from
                    <span className={ styles.textHighlight }> Buenos Aires, Argentina.</span>
                </p>
                <p className={ styles.text }>
                    I have 3 years of professional experience developing REST APIs and web
                    applications at a leading company with a strong presence across Latin America.
                    I've worked across both backend and frontend technologies, building and
                    maintaining applications used by multiple brands and teams.
                </p>
                <p className={ styles.text }>
                    I'm passionate about technology and enjoy continuously learning new skills,
                    exploring new technologies, and challenging myself to build effective and
                    innovative solutions.
                </p>
                <h1 className={ `txt-shadow-solid ${styles.subtitle}` }>Skills</h1>
                <SkillsContainer />
            </div>
        </section>
    );
};

export { Skills };