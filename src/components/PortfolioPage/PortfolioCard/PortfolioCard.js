import "./PortfolioCard.css"
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import humannoah from '../../Aboutmepage/images/humannoah.png';

export default function PortfolioCard(){
    return <div className="Portfolio-card">
                <div className="card-overlay">
                    <button className="Icon-button">
                        <AiFillGithub className="Github-icon" size={50}/>
                    </button>
                    Sample Text
                    <button className="Icon-button">
                        <AiOutlineLink className="Link-icon" size={50}/>
                    </button>
                </div>
                <img className= "Portfolio-image" src= {humannoah} alt= "noah"/>
            </div>
}