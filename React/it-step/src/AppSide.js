import './AppSide.css';
import face from './jd.jpg';

function AppSide() {
  return (
    <div className="AppSide">
      <img className="face" alt="face" src={face} height="300" />
      <h2>Jonny Depp</h2>
      <p>
        John Christopher Depp II (born June 9, 1963) is an American actor and musician. He is the recipient of multiple accolades, including a Golden Globe Award and a Screen Actors Guild Award, and has been nominated for three Academy Awards and two BAFTA awards.
      </p>
    </div>
  );
}

export default AppSide;
