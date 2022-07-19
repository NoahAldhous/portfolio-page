import Header from '../Header/Header';
import Landingpage from '../Landingpage/Landingpage';
import Navbar from '../Navbar/Navbar';
import './App.css';


function App() {
 


  return (
    <div className="App">
      <Header/>
      <div className="Main">
        <div className="Navbar-container">
          <Navbar/>
        </div>
        <div className="Content-container">
          <Landingpage/>
          <Landingpage/>
          <Landingpage/>
          <Landingpage/>
          <Landingpage/>
        </div>
      </div>
    </div>
  );
}

export default App;
