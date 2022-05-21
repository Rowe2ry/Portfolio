import quizScreenshot from '../assets/image/quiz.png'

const Quiz = () => {
    return (
        <article className="row">
                <section className="card">
                    <div className="card__header">
                        <h2 className="card__title">Coding Quiz</h2>
                    </div>
                    <div className="card__body row">
                    <div className="photo">
                                <img src={quizScreenshot} alt="A 10 question Javascript quiz with a variable difficulty."/>
                            </div>
                        <div className="card__text">
                            <p>This is a quiz written.</p>
                            <div className="buttons">
                                <button><a target="_blank" href="https://rowe2ry.github.io/CodeQuiz/" rel="noreferrer">Website</a></button>
                                <button><a target="_blank" href="https://github.com/Rowe2ry/CodeQuiz" rel="noreferrer">Code</a></button>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
    );
};

export default Quiz;