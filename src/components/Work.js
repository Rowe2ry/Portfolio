import Overdrive from './Overdrive';
import Quiz from './Quiz';
import Weather from './Weather';

const Work = () => {
    return (
        <div className="background">
            <div className="container">
                <Overdrive />
                <Quiz />
                <Weather />
            </div>
        </div>
    );
};

export default Work;