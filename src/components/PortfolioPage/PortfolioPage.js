import "./PortfolioPage.css";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import jungleSums from './PortfolioImages/jungleSums.png';
import justMyType from './PortfolioImages/justMyType.png';
import pokebrawlz from './PortfolioImages/pokebrawlz.png';
import portfoliopage from './PortfolioImages/portfoliopage.png';
import digitalNoah from '../Aboutmepage/images/digitalnoah.png';

export default function PortfolioPage(){
   return <div className="PortfolioPage">
            <h2 className="Subheading">MY PORTFOLIO</h2>
            <section className="Portfolio-grid">
                <PortfolioCard githubLink = "https://github.com/NoahAldhous" deployedLink = "https://jungle-sum.netlify.app/" title = "JUNGLE SUMS" text = "an educational app for homeschooled children built with ReactJS, Auth0 and PostgreSQL" image = {jungleSums}/>
                <PortfolioCard githubLink = "https://github.com/NoahAldhous/just-my-type" deployedLink = "https://visionary-klepon-ded6d3.netlify.app/" title = "JUST MY TYPE" text = "a simple game designed to test your typing skill. Built with ReactJS." image = {justMyType}/>
                <PortfolioCard githubLink = "https://github.com/NoahAldhous/pokemonfetchapp" deployedLink = "https://pokebrawlz.netlify.app/" title = "POKEBRAWLZ" text = "a React.js app using the PokeAPI to find random pokemon" image = {pokebrawlz}/>
                <PortfolioCard githubLink = "https://github.com/NoahAldhous/portfolio-page" deployedLink = "https://www.noahaldhous.com/" title = "THIS SITE" text = "oooh so meta! Built with React.js" image = {portfoliopage}/>
                <PortfolioCard githubLink = "https://github.com/NoahAldhous" deployedLink = "https://jungle-sum.netlify.app/" text = "Coming Soon!" image = {digitalNoah}/>
                <PortfolioCard githubLink = "https://github.com/NoahAldhous" deployedLink = "https://jungle-sum.netlify.app/" text = "Coming Soon!" image = {digitalNoah}/>
            </section>
        </div>
}


