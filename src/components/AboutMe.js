import photo from '../assets/image/Self.jpeg'

const AboutMe = () => {



    return (
        <div className="background">
            <div className="container">
                <div className="row">
                    <article className="card">
                        <section className="card__header">
                            <h2 className="card__title">About Me</h2>
                        </section>
                        <section className="card__body row">
                            <div className="photo">
                                <img src={photo} alt="Me"/>
                            </div>
                            <div className="card__text">
                                <p>Hello there! My name is Chris Rowe and I am a web developer with a love for problem solving and growth. I think its very important to strike the right blend of having fun and not taking one's self too seriosly, while still being productive and accomplishing tasks with precision and excellence. Life is about experiences, and creativity allows me to enhance that experience for others.</p>
                            </div>
                        </section>
                    </article>
                </div>
                <div className="row">
                    <article className="card">
                        <section className="card__header">
                            <h2 className="card__title">Who I am</h2>
                        </section>
                        <section className="card__body row">
                            <div className="card__text">
                                <p>I'm a {new Date().getFullYear() - 1990} year old living in Atlanta, GA. My pronouns are "Him/He" and currently have 1 child. My wife, Merry and I care about family, community, and creating environments where people are constantly able to grow. We have 2 cats and we host international language students out of our home.</p>
                            </div>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;