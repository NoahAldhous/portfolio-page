import Header from '../Header/Header';
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
          <h2>Text</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
