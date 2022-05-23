import tripScreenshot from '../assets/image/Roadtrip.png'

const RoadTrip = () => {
    return (
        <article className="row">
                <section className="card">
                    <div className="card__header">
                        <h2 className="card__title">Getaway: Road Trip Estimator</h2>
                    </div>
                    <div className="card__body row">
                        <div className="photo">
                            <a target="_blank" href="https://jaspertena.github.io/RoadTripApp/" rel="noreferrer"><img src={tripScreenshot} alt="A 10 question Javascript quiz with a variable difficulty."/></a>
                        </div>
                        <div className="card__text">
                            <p>A web application using the Geoapify API to generate a true real-world estimate for timing a family road trip. Unlike the standard mapping tools which give time estimates for continuous non-stop travel at the speed limit, this application uses a powerful Javascript algorithm under the hood to deliver an estimate that takes human needs like bathroom brakes, meals, and sleep into account for a more applicable expectation of long distance travel by car.</p>
                            <div className="buttons">
                                <button><a target="_blank" href="https://jaspertena.github.io/RoadTripApp/" rel="noreferrer">Website</a></button>
                                <button><a target="_blank" href="https://github.com/Rowe2ry/Road_Trip_Estimation_Tool" rel="noreferrer">Code</a></button>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
    );
};

export default RoadTrip;