import DevDr from './DevDr';
import Overdrive from './Overdrive';
import Quiz from './Quiz';
import Weather from './Weather';
import ProfileGenerator from './ProfileGenerator';
import RoadTrip from './RoadTripApp';

const Work = () => {
    return (
        <div className="background">
            <div className="container">
                <DevDr />
                <Overdrive />
                <Quiz />
                <Weather />
                <ProfileGenerator />
                <RoadTrip />
            </div>
        </div>
    );
};

export default Work;