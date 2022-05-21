import weatherScreenshot from '../assets/image/weather.png'

const Weather = () => {
    return (
        <article className="row">
                <section className="card">
                    <div className="card__header">
                        <h2 className="card__title">Weather Simplified</h2>
                    </div>
                    <div className="card__body row">
                    <div className="photo">
                                <img src={weatherScreenshot} alt="Web application for a 5 day forecast"/>
                            </div>
                        <div className="card__text">
                            <p>An online educational experience for people who want to learn how to do automotive work. Using a SQL database as a backbone, users can create an account with an encrypted password stored in the database. Conditional rendering gives new users access to lessons laid out using a template engine. Express API routing uses authorization logic to only unlock content as users successfully complete quizzes following each lesson. All server side handling is done through Node.</p>
                            <div className="buttons">
                                <button><a target="_blank" href="https://overdrive-automotive-school.herokuapp.com/" rel="noreferrer">Website</a></button>
                                <button><a target="_blank" href="https://github.com/Rowe2ry/Overdrive-Automotive-School" rel="noreferrer">Code</a></button>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
    );
};

export default Weather;