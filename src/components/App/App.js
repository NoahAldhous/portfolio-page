import Aboutmepage from '../Aboutmepage/Aboutmepage';
import Header from '../Header/Header';
import Homebutton from '../Homebutton/Homebutton';
import Landingpage from '../Landingpage/Landingpage';
import Navbar from '../Navbar/Navbar';
import './App.css';


function App() {


  function handleClick(page) {
    document.querySelector(page).scrollIntoView()
  }
    


  return (
    <div className="App">
      <Header/>
      <div className="Main">
        <div className="Navbar-container">
          <Homebutton handleClick = {handleClick} page = ".Landingpage"/>
          <Navbar handleClick = {handleClick}/>
        </div>
        <div className="Content-container">
          <Landingpage Landingpage = "Landingpage"/>
          <Aboutmepage/>
          <Landingpage/>
          <Landingpage/>
          <Landingpage/>
          <Landingpage/>
        </div>
        <div className="Line-container"></div>
      </div>
    </div>
  );
}

export default App;
