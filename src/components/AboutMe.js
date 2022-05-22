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
                                <p>Hello there! My name is Chris Rowe and I am a web developer with a love for problem solving and growth. I have the knowledge and skills to:</p>
                                <ul>
                                    <li>Configure and implement a relational or non relational database from scratch</li>
                                    <li>Set up a server side API</li>
                                    <li>Layout client side UI/UX</li>
                                    <li>Modern Tech Stack Knowledge
                                        <ul>
                                            <li>MongoDB</li>
                                            <li>Node</li>
                                            <li>React</li>
                                            <li>Vue</li>
                                            <li>and more!</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </article>
                </div>
                <div className="row">
                    <article className="card">
                        <section className="card__header">
                            <h2 className="card__title">Values, Hobbies, & Interests</h2>
                        </section>
                        <section className="card__body row">
                            <div className="card__text">
                                <p><strong>Values:</strong> I'm a {new Date().getFullYear() - 1990} year old living in Atlanta, GA. My pronouns are "Him/He" and currently have 1 child. My wife, Merry and I care about family, community, and creating environments where people are constantly able to grow. We have 2 cats and we host international language students out of our home.</p>
                            </div>
                            <div className="card__text">
                                <p>I have always been in love with absolutely anything creative. From a young age, one of my favorite things to do was to draw and make artwork. In High School I became heavily vested in Photography. This turned into a career in digital imaging and print through all of my 20s. I have {new Date().getFullYear() - 2004} years of experience in Adobe Photoshop and Illustrator from that portion of my journey. Throughout it all my ultimate source of inspiration has been my love of all things automotive. As I have come to the current crossroads of life, I have experimented with wood working, welding & metalworking, and home maintenance. All of this has led me toward learning about web development as the next limitless opportunity for creativity.</p>
                            </div>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;