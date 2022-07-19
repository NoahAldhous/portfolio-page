import './Navbar.css'
import Navbutton from '../Navbutton/Navbutton'

export default function Navbar({handleClick}){
    return  <div className="Navbar">
    <Navbutton buttonText = "AM" handleClick={handleClick} page= ".Aboutmepage"/>
    <Navbutton buttonText = "PF"/>
    <Navbutton buttonText = "EX"/>
    <Navbutton buttonText = "CI"/>
    <Navbutton buttonText = "LI"/>
    <Navbutton buttonText = "TW" link = "https://twitter.com/theOldHaus"/>
    <Navbutton buttonText = "GH"/>
    <Navbutton buttonText = "IG"/>
  </div>
  
}