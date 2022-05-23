import resume from '../assets/pdf/ChrisRoweResume_May_2022.pdf';

const AboutMe = () => {

    return (
        <div className="background">
            <div className="container">
                <div className="row">
                    <article className="card">
                        <section className="card__header">
                            <h2 className="card__title">Skills</h2>
                        </section>
                        <section className="card__body row">
                            <div className="card__text">
                                <p>Download my resume <a class="body__link" href={resume} download="ChrisRoweResume">HERE</a>.</p>
                                <p>Are you in need of web development services using the latest and greatest technologies? I have the knowledge and skills to:</p>
                                <ul>
                                    <li>Configure and implement a relational or non relational database from scratch</li>
                                    <li>Set up a server side API</li>
                                    <li>Layout client side UI/UX</li>
                                    <li>Tech Stack Knowledge:
                                        <ul>
                                        <li>React</li>
                                            <li>Vue</li>
                                            <li>MongoDB</li>
                                            <li>Mongoose</li>
                                            <li>Express</li>
                                            <li>Node</li>
                                            <li>SQL</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;