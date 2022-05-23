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
                            <a target="_blank" href="https://rowe2ry.github.io/CodeQuiz/" rel="noreferrer"><img src={quizScreenshot} alt="A 10 question Javascript quiz with a variable difficulty."/></a>
                        </div>
                        <div className="card__text">
                            <p>This is a quiz written in vanilla HTML, CSS, and Javascript. I wrote this entire application in 3 days after having learned how to code for just 2 weeks. Users can select a difficulty level in which they would like to play with different time clocks and penalty values. The 10 question quiz selects the 10 questions at random from a larger pool of questions and displays them in a randomized order to prevent test answer memorization. Users are rewarded when they finish a game in the allowed time with high score tracking to local storage.</p>
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