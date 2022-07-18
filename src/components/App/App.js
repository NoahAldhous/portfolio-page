import Navbutton from '../Navbutton/Navbutton';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">Hello</div>
      <div className="Main">
        <div className="Navbar-container">
          <div className="Navbar">
            <Navbutton className='Navbutton' buttonText = "AM"/>
            <Navbutton className='Navbutton' buttonText = "PF"/>
            <Navbutton className='Navbutton' buttonText = "EX"/>
            <Navbutton className='Navbutton' buttonText = "CI"/>
            <Navbutton className='Navbutton' buttonText = "LI"/>
            <Navbutton className='Navbutton' buttonText = "TW"/>
            <Navbutton className='Navbutton' buttonText = "GH"/>
            <Navbutton className='Navbutton' buttonText = "IG"/>
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
