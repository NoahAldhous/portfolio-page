import "./PortfolioPage.css";
import PortfolioCard from "./PortfolioCard/PortfolioCard";


export default function PortfolioPage(){
   return <div className="PortfolioPage">
            <h2 className="Subheading">MY PORTFOLIO</h2>
            <section className="Portfolio-grid">
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
            </section>
        </div>
}


