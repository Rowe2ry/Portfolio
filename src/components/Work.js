import Overdrive from './Overdrive';
import Quiz from './Quiz';
import Weather from './Weather';
import ProfileGenerator from './ProfileGenerator';

const Work = () => {
    return (
        <div className="background">
            <div className="container">
                <Overdrive />
                <Quiz />
                <Weather />
                <ProfileGenerator />
            </div>
        </div>
    );
};

export default Work;