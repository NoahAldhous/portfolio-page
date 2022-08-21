import Aboutmepage from '../Aboutmepage/Aboutmepage';
import ExperiencePage from '../ExperiencePage/ExperiencePage';
import Landingpage from '../Landingpage/Landingpage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import Semicircle from '../Semicircle/Semicircle';
import LeftSemiCircle from '../Semicircle/LeftSemiCircle';
import './App.css';
import ContactPage from '../ContactPage/ContactPage';


function App() {

  function handleClick(page) {
    document.querySelector(page).scrollIntoView()
  }

  return (
    <div className="App">
      {/* <Header/> */}
      <div className="Main">
        <section className="Navigate-Menu">
        <div className="Left-arrow">{'<'}NAVIGATE</div>
          <LeftSemiCircle text = {"HOME"} handleClick={handleClick} page = ".Landingpage"/>
          <LeftSemiCircle text = {"ABOUT ME"} handleClick={handleClick} page= ".Aboutmepage"/>
          <LeftSemiCircle text = {"PORTFOLIO"} handleClick={handleClick} page= ".PortfolioPage"/>
          <LeftSemiCircle text = {"EXPERIENCE"} handleClick={handleClick} page= ".ExperiencePage"/>
          <LeftSemiCircle text = {"CONTACT"} handleClick={handleClick} page= ".ContactPage"/>
        </section>
        <section className="Content-container">
          <Landingpage Landingpage = "Landingpage"/>
          <Aboutmepage/>
          <PortfolioPage/>
          <ExperiencePage/>
          <ContactPage/>
        </section>
        <section className="Line-container">
        <div className="Right-arrow">CONNECT{'>'}</div>
          <Semicircle text = {"EMAIL"} url={"mailto:naldhous@hotmail.co.uk"}/>
          <Semicircle text = {"LINKEDIN"} url={'https://www.linkedin.com/in/noah-aldhous-4436a3195/'}/>
          <Semicircle text = {"GITHUB"} url={'https://github.com/NoahAldhous'}/>
          <Semicircle text = {"TWITTER"} url={'https://twitter.com/theOldHaus'}/>
          <Semicircle text = {"INSTAGRAM"} url={'https://www.instagram.com/the_oldhaus/'}/>
        </section>
      </div>
    </div>
  );
}

export default App;
