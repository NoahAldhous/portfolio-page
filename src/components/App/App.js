import './App.css';
import Aboutmepage from '../Aboutmepage/Aboutmepage';
import ExperiencePage from '../ExperiencePage/ExperiencePage';
import Landingpage from '../Landingpage/Landingpage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import Semicircle from '../Semicircle/Semicircle';
import LeftSemiCircle from '../Semicircle/LeftSemiCircle';
import ContactPage from '../ContactPage/ContactPage';
import Header from '../Header/Header';
import LightModeButton from '../LightModeButton/LightModeButton';
import ScrollDownButton from '../ScrollDownButton/ScrollDownButton';
import Footer from '../Footer/Footer';
import NoahAldhousCV from '../Data/NoahAldhousCV.pdf'



function App() {

  var prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
 
      if(currentScrollPos === 0){
          document.querySelector(".Icon-container").style.opacity = "100";
          document.querySelector(".Icon-container").style.top = "91%";
      }
      else if (prevScrollpos > currentScrollPos){
          document.querySelector(".light-mode-button-container").style.top = "0";
      } 
      else {
          document.querySelector(".light-mode-button-container").style.top = "-15vh";
          document.querySelector(".Icon-container").style.opacity = "0";
          document.querySelector(".Icon-container").style.top = "115vh";
      }
      prevScrollpos = currentScrollPos;
  }

  function handleClick(page) {
    document.querySelector(page).scrollIntoView(true);
  }

  return (
    <div className="App">
      <div className="Main">
      <Header handleClick = {handleClick}/>
        <section className="Navigate-Menu">
        <div className="Left-arrow">{'<'}NAVIGATE</div>
          <LeftSemiCircle text = {"HOME"} handleClick={handleClick} page = ".Landingpage"/>
          <LeftSemiCircle text = {"ABOUT ME"} handleClick={handleClick} page= "#AboutMePageSubheading"/>
          <LeftSemiCircle text = {"PORTFOLIO"} handleClick={handleClick} page= "#PortfolioPageSubheading"/>
          <LeftSemiCircle text = {"EXPERIENCE"} handleClick={handleClick} page= ".ExperiencePage"/>
          <LeftSemiCircle text = {"CONTACT"} handleClick={handleClick} page= ".ContactPage"/>
        </section>
        <section className="Content-container">
          <LightModeButton/>
          <Landingpage/>
          <ScrollDownButton/>
          <Aboutmepage/>
          <PortfolioPage/>
          <ExperiencePage/>
          <ContactPage/>
        </section>
        <section className="Line-container">
        <div className="Right-arrow">CONNECT{'>'}</div>
          <Semicircle text = {"EMAIL"} url={"mailto:naldhous@hotmail.co.uk"}/>
          <Semicircle text = {"LINKEDIN"} url={'https://www.linkedin.com/in/noah-aldhous/'}/>
          <Semicircle text = {"GITHUB"} url={'https://github.com/NoahAldhous'}/>
          <Semicircle text = {"TWITTER"} url={'https://twitter.com/theOldHaus'}/>
          <Semicircle text = {"CV"} url={NoahAldhousCV}/>
        </section>
      </div>
          <Footer/>
    </div>
  );
}

export default App;
