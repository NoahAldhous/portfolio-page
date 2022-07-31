import Aboutmepage from '../Aboutmepage/Aboutmepage';
import ExperiencePage from '../ExperiencePage/ExperiencePage';
import Header from '../Header/Header';
import Landingpage from '../Landingpage/Landingpage';
import Navbar from '../Navbar/Navbar';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import Semicircle from '../Semicircle/Semicircle';
import './App.css';


function App() {

  function handleClick(page) {
    document.querySelector(page).scrollIntoView()
  }

  return (
    <div className="App">
      <Header/>
      <div className="Main">
        <section className="Navbar-container">
          <Navbar handleClick = {handleClick}/>
        </section>
        <section className="Content-container">
          <Landingpage Landingpage = "Landingpage"/>
          <Aboutmepage/>
          <PortfolioPage/>
          <ExperiencePage/>
          <Landingpage/>
          <Landingpage/>
          <Landingpage/>
          <Landingpage/>
        </section>
        <section className="Line-container">
          <Semicircle text = {"EMAIL"} />
          <Semicircle text = {"LINKEDIN"}/>
          <Semicircle text = {"GITHUB"}/>
          <Semicircle text = {"TWITTER"}/>
          <Semicircle text = {"INSTAGRAM"}/>
        </section>
      </div>
    </div>
  );
}

export default App;
