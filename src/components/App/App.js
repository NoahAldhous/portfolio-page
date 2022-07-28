import Aboutmepage from '../Aboutmepage/Aboutmepage';
import Header from '../Header/Header';
import Homebutton from '../Homebutton/Homebutton';
import Landingpage from '../Landingpage/Landingpage';
import Navbar from '../Navbar/Navbar';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
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
          <Homebutton handleClick = {handleClick} page = ".Landingpage"/>
          <Navbar handleClick = {handleClick}/>
        </section>
        <section className="Content-container">
          <Landingpage Landingpage = "Landingpage"/>
          <Aboutmepage/>
          <PortfolioPage/>
          <Landingpage/>
          <Landingpage/>
          <Landingpage/>
          <Landingpage/>
        </section>
        <section className="Line-container">
          <div className = "semiCircle"></div>
          <div className = "semiCircle"></div>
          <div className = "semiCircle"></div>
          <div className = "semiCircle"></div>
          <div className = "semiCircle"></div>
        </section>
      </div>
    </div>
  );
}

export default App;
