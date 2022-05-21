import odScreenshot from '../assets/image/Overdrive.png'

const Overdrive = () => {
    return (
        <article className="row">
                <section className="card">
                    <div className="card__header">
                        <h2 className="card__title">Overdrive Automotive School</h2>
                    </div>
                    <div className="card__body row">
                    <div className="photo">
                                <img src={odScreenshot} alt="Web application to teach people how to work on cars."/>
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

export default Overdrive;