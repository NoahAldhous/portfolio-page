import "./PortfolioCard.css";


export default function PortfolioCard({githubLink , deployedLink, title, text, image }){
    return <div className="Portfolio-card">
                <div className="card-overlay">
                    <div className="card-overlay-title">{title}</div>     
                    <br/>
                    {text}
                    <section className = "icon-container">
                        <a className="Icon-button" href = {githubLink} target='_blank' rel='noreferrer'>
                            GitHub
                        </a>
                        <a className="Icon-button" href = {deployedLink} target='_blank' rel='noreferrer'>
                            Link
                        </a>
                    </section>
                </div>
                <img className= "Portfolio-image" src= {image} alt= "noah"/>
            </div>
}