import styles from "./skillsContainer.module.css";
import { SkillCard } from "../skillCard/SkillCard.jsx";

const SkillsContainer = () => {
    return (
        <div className={ styles.cardsContainer }>
            <SkillCard logo="https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black">
                I self-learned ReactJS and then I took part in a group where we made a small project.
            </SkillCard>

            <SkillCard logo="https://img.shields.io/badge/python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white">
                I learned Python in university and in my first course on Full Stack Development.
            </SkillCard>

            <SkillCard logo="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white">
                I learned Django and Django REST Framework in a backend course.
            </SkillCard>

            <SkillCard logo="https://img.shields.io/badge/Git-%23FFFFFF.svg?style=for-the-badge&logo=Git&logoColor=F05032">
                I've got practice in managing GIT repositories, using a good variety of commands, and I have knowledge of GIT Flow.
            </SkillCard>

            <SkillCard logo="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black">
                I learned JavaScript in my programming courses, and I've got practice in DOM manipulation.
            </SkillCard>

            <SkillCard logo="https://img.shields.io/badge/java-%23FFFFFF.svg?style=for-the-badge&logo=CoffeeScript&logoColor=EE1F27">
                I learned the basics of Java on my own, and I'm currently studying Springboot.
            </SkillCard>
        </div>
    );

};

export { SkillsContainer };