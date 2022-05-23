import vueScreenshot from '../assets/image/Vue.png'

const VueTimer = () => {
    return (
        <article className="row">
                <section className="card">
                    <div className="card__header">
                        <h2 className="card__title">Reaction Timer</h2>
                    </div>
                    <div className="card__body row">
                        <div className="photo">
                            <a target="_blank" href="https://rowe2ry.github.io/Reaction-Timer/" rel="noreferrer"><img src={vueScreenshot} alt="A 10 question Javascript quiz with a variable difficulty."/></a>
                        </div>
                        <div className="card__text">
                            <p>A streamlined reaction timing game to be played in the web browser. Written using Vue 3, this game allows users to test their reaction time to click on a green square that is generated at a random time interval between 2 and 7 seconds after a user has started a game.</p>
                            <div className="buttons">
                                <button><a target="_blank" href="https://rowe2ry.github.io/Reaction-Timer/" rel="noreferrer">Website</a></button>
                                <button><a target="_blank" href="https://github.com/Rowe2ry/Reaction-Timer" rel="noreferrer">Code</a></button>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
    );
};

export default VueTimer;