import "./PortfolioCard.css"
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";


export default function PortfolioCard({githubLink , deployedLink, title, text, image }){
    return <div className="Portfolio-card">
                <div className="card-overlay">
                    <section className = "icon-container">
                        <a className="Icon-button" href = {githubLink} target='_blank' rel='noreferrer'>
                            <AiFillGithub className="Github-icon" size={50}/>
                        </a>
                        <a className="Icon-button" href = {deployedLink} target='_blank' rel='noreferrer'>
                            <AiOutlineLink className="Link-icon" size={50}/>
                        </a>
                    </section>
                    {title}     
                    <br/>
                    {text}
                </div>
                <img className= "Portfolio-image" src= {image} alt= "noah"/>
            </div>
}