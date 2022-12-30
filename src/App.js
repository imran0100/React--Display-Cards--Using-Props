import "bulma/css/bulma.css";
import ProfileCard from "./Components/ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Asistant</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="alexa"
                handle="@alexa123"
                image={AlexaImage}
                description="Alexa was created by Amazon and helps you buy things"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="cortana"
                handle="@cortan123"
                image={CortanaImage}
                description="Cortana was made by Microsoft .Who knows what it does?"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="siri"
                handle="@siri123"
                image={SiriImage}
                description="Siri was made by Apple and is being phased out"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
