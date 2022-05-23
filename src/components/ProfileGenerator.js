import teamScreenshot from '../assets/image/profile_generator.png'

const ProfileGenerator = () => {
    return (
        <article className="row">
                <section className="card">
                    <div className="card__header">
                        <h2 className="card__title">Team Page Generator</h2>
                    </div>
                    <div className="card__body row">
                        <div className="photo">
                            <a target="_blank" href="https://github.com/Rowe2ry/team_profile_generator" rel="noreferrer"><img src={teamScreenshot} alt="Output screenshot of a webpage generated usin the app.."/></a>
                        </div>
                        <div className="card__text">
                            <p>A command line application written in Node that guides users through a series of questions to build an HTML page with customizable styling that can be used to introduce a team of professionals. As written, the app can track a team Manager, engineers, and interns. The output themes available are a light mode, dark mode, and a selection of 6 different colors.</p>
                            <div className="buttons">
                                <button><a target="_blank" href="Video Demo/Walkthrough" rel="noreferrer">Video</a></button>
                                <button><a target="_blank" href="https://github.com/Rowe2ry/team_profile_generator" rel="noreferrer">Code</a></button>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
    );
};

export default ProfileGenerator;