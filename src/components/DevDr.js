import devDrScreenshot from '../assets/image/DevDr.png'

const DevDr = () => {
    return (
        <article className="row">
                <section className="card">
                    <div className="card__header">
                        <h2 className="card__title">DevDr.</h2>
                    </div>
                    <div className="card__body row">
                        <div className="photo">
                            <a  target="_blank" href="https://dev-doctor.herokuapp.com/" rel="noreferrer"><img src={devDrScreenshot} alt="Web application to help people build their own sites."/></a>
                        </div>
                        <div className="card__text">
                            <p>A full-stack web application utilizing password encryption, JWT authorization, a MongoDB database, and React front end to give users the tools to build their own web projects with professional and polished UI/UX themes. Users can create a secured account, build entire web projects, change design appearances, gain access to the raw code with advanced React-driven state management. Users are then guided to deploying their own web application without having to have written any code themselves.</p>
                            <div className="buttons">
                                <button><a target="_blank" href="https://dev-doctor.herokuapp.com/" rel="noreferrer">Website</a></button>
                                <button><a target="_blank" href="https://github.com/jdmill/devdoc" rel="noreferrer">Code</a></button>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
    );
};

export default DevDr;