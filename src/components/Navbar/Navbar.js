import Homebutton from '../Homebutton/Homebutton'
import './Navbar.css'
import Navbutton from './Navbutton/Navbutton'

export default function Navbar({handleClick}){
    return  <div className = "Nav">
      <Homebutton handleClick = {handleClick} page = ".Landingpage"/>
    <div className="Navbar">
      <Navbutton buttonText = "AM" handleClick={handleClick} page= ".Aboutmepage"/>
      <Navbutton buttonText = "PF" handleClick={handleClick} page= ".PortfolioPage"/>
      <Navbutton buttonText = "EX" handleClick={handleClick} page= ".ExperiencePage"/>
      <Navbutton buttonText = "CI"/>
      <Navbutton buttonText = "LI"/>
      <Navbutton buttonText = "TW"/>
      <Navbutton buttonText = "GH"/>
      <Navbutton buttonText = "IG"/>
    </div>
  </div>
  
}