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
                            <a target="_blank" href="https://rowe2ry.github.io/Weather-Forecast/" rel="noreferrer"><img src={weatherScreenshot} alt="Web application for a 5 day forecast"/></a>
                        </div>
                        <div className="card__text">
                            <p>A Javascript web application laid out over a Skeleton CSS framework using the OpenWeather API to generate a 5 day forecast. This application features conditional formatting as well as a fully responsive layout.</p>
                            <div className="buttons">
                                <button><a target="_blank" href="https://rowe2ry.github.io/Weather-Forecast/" rel="noreferrer">Website</a></button>
                                <button><a target="_blank" href="https://github.com/Rowe2ry/Weather-Forecast" rel="noreferrer">Code</a></button>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
    );
};

export default Weather;