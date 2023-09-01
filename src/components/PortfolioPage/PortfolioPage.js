import "./PortfolioPage.css";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import justMyType from './PortfolioImages/justMyType.png';
import pokebrawlz from './PortfolioImages/pokebrawlz.png';
import portfoliopage from './PortfolioImages/portfoliopage.png';
import splitTheBill from './PortfolioImages/splitTheBill.png';
import myToDoList from './PortfolioImages/myToDoList.png'
import rubyParkerPhotography from './PortfolioImages/rubyparker.png'

export default function PortfolioPage(){
   return <div className="PortfolioPage">
            <h2 id="PortfolioPageSubheading" className="Subheading">MY PORTFOLIO</h2>
            <section className="Portfolio-grid">
                <PortfolioCard githubLink = "https://github.com/NoahAldhous/just-my-type" deployedLink = "https://visionary-klepon-ded6d3.netlify.app/" title = "JUST MY TYPE" text = "a simple game designed to test your typing skill. Built with ReactJS." image = {justMyType}/>
                <PortfolioCard githubLink = "https://github.com/NoahAldhous/ruby-parker-harbord-portfolio" deployedLink = "https://www.rubyparkerphotography.com/" title = "RUBY PARKER PHOTOGRAPHY" text = "A photographer's portfolio site, built with NextJS 13, Typescript, Tailwind CSS and the Framer Animation Library" image = {rubyParkerPhotography}/>
                <PortfolioCard githubLink = "https://github.com/NoahAldhous/pokemonfetchapp" deployedLink = "https://pokebrawlz.netlify.app/" title = "POKEBRAWLZ" text = "a React.js app using the PokeAPI to find random pokemon." image = {pokebrawlz}/>
                <PortfolioCard githubLink = "https://github.com/NoahAldhous/split-the-bill" deployedLink = "https://bill-calculator-ecru.vercel.app/" title = "SPLIT THE BILL" text = "A Vue app to help people split their restaurant bills. Bult with a mobile-first design." image = {splitTheBill}/>
                <PortfolioCard githubLink = "https://github.com/NoahAldhous/to-do-list-frontend" deployedLink = "https://storied-unicorn-46d331.netlify.app/" title = "MY TO-DO LIST" text = "A full-stack MERN to-do list app. Written with Typescript and Tailwind CSS." image = {myToDoList}/>
                <PortfolioCard githubLink = "https://github.com/NoahAldhous/portfolio-page" deployedLink = "https://www.noahaldhous.com/" title = "THIS SITE" text = "oooh so meta! Built with React.js" image = {portfoliopage}/>
            </section>
        </div>
}


