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
            </div>
        </div>
    );
};

export default AboutMe;