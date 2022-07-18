import Header from '../Header/Header';
import Navbutton from '../Navbutton/Navbutton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Main">
        <div className="Navbar-container">
          <div className="Navbar">
            <Navbutton buttonText = "AM"/>
            <Navbutton buttonText = "PF"/>
            <Navbutton buttonText = "EX"/>
            <Navbutton buttonText = "CI"/>
            <Navbutton buttonText = "LI"/>
            <Navbutton buttonText = "TW"/>
            <Navbutton buttonText = "GH"/>
            <Navbutton buttonText = "IG"/>
          </div>
          
        </div>
        <div className="Content-container">
          <h2>Text</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
