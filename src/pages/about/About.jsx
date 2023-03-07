import styles from './about.module.css';

const About = () => {
    return (
        <section className={ styles.about }>
            <div className={ styles.container }>
                <h1 className={ `txt-shadow-solid ${styles.title }` }>About me</h1>
                <p className={ styles.text }>
                    Nice to meet you! My name is Matías Ortubia, and I'm a 
                    <span className={ styles.textHighlight }> Fullstack Web Developer </span> 
                    from
                    <span className={ styles.textHighlight }> Buenos Aires, Argentina.</span> 
                </p>
                <p className={ styles.text }>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium debitis inventore harum delectus magnam vero laborum, repudiandae aperiam sint vel quisquam veniam et obcaecati perferendis vitae, temporibus asperiores consequatur possimus aspernatur. Numquam, eius tempore dolor in culpa veritatis deserunt explicabo quidem facilis cum exercitationem vel laudantium excepturi sed harum enim!
                </p>
            </div>
        </section>
    );
};

export { About };