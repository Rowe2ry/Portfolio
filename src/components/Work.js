import Overdrive from './Overdrive';
import Quiz from './Quiz';
import Weather from './Weather';
import ProfileGenerator from './ProfileGenerator';
import RoadTrip from './RoadTripApp';
import VueTimer from './VueReactionTimer';

const Work = () => {
    return (
        <div className="background">
            <div className="container">
                <Overdrive />
                <Quiz />
                <Weather />
                <ProfileGenerator />
                <RoadTrip />
                <VueTimer />
            </div>
        </div>
    );
};

export default Work;