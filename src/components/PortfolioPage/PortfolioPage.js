import "./PortfolioPage.css";
import PortfolioCard from "./PortfolioCard/PortfolioCard";


export default function PortfolioPage(){
   return <div className="PortfolioPage">
            <h2 className="Subheading">MY PORTFOLIO</h2>
            <section className="Portfolio-container">
                <section className="Portfolio-card-container">
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                </section>
                <section className="Portfolio-card-container">
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                </section>
            </section>
        </div>
}


