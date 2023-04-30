import styles from "./skillCard.module.css";

const SkillCard = ({ logo, children }) => {
    return (
        <div className={ styles.cardContainer }>
            <img src={ logo } alt="Logo" className={ styles.logo } />
            <p className={ styles.cardText }>{ children }</p>
        </div>
    );

};

export { SkillCard };