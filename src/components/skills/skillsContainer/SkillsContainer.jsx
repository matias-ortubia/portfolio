import styles from "./skillsContainer.module.css";
import { SkillCard } from "../skillCard/SkillCard.jsx";

const SkillsContainer = () => {
    return (
        <div className={ styles.cardsContainer }>
            <SkillCard logo="https://img.shields.io/badge/java-%23FFFFFF.svg?style=for-the-badge&logo=CoffeeScript&logoColor=EE1F27">
                3 years of experience with Java, creating REST APIs and mantaining full backend applications using the Spring framework
            </SkillCard>

            <SkillCard logo="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white">
                3 years of experience working with Angular, implementing new features proposed by the product and UX/UI teams, and mantaining the application.
            </SkillCard>

            <SkillCard logo="https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white">
                3 years of experience managing MongoDB databases
            </SkillCard>

            <SkillCard logo="https://img.shields.io/badge/Git-%23FFFFFF.svg?style=for-the-badge&logo=Git&logoColor=F05032">
                Experience managing GIT repositories, using Github Actions, and knowledge on GIT Flow.
            </SkillCard>

            <SkillCard logo="https://img.shields.io/badge/Cloud-Amazon_AWS-blue?logo=amazonaws">
                I've got knowledge on AWS and I was able to fully deploy projects using services like EC2, S3, RDS and Cludfront
            </SkillCard>

            <SkillCard logo="https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black">
                I self-learned ReactJS, and then I took part in a group where we made a small project.
            </SkillCard>

            <SkillCard logo="https://img.shields.io/badge/python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white">
                I learned Python in university and in my first course on Full Stack Development.
            </SkillCard>

            <SkillCard logo="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white">
                I took part in a Backend Development course where I learned Django and Django REST Framework.
            </SkillCard>
        </div>
    );

};

export { SkillsContainer };