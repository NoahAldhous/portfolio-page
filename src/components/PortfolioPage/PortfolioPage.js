import "./PortfolioPage.css";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import jungleSums from './PortfolioImages/jungleSums.png';
import digitalNoah from '../Aboutmepage/images/digitalnoah.png'

export default function PortfolioPage(){
   return <div className="PortfolioPage">
            <h2 className="Subheading">MY PORTFOLIO</h2>
            <section className="Portfolio-grid">
                <PortfolioCard githubLink = "https://github.com/NoahAldhous" deployedLink = "https://jungle-sum.netlify.app/" text = "Jungle Sums is an educational app for homeschooled children built with ReactJS, Auth0 and PostgreSQL" image = {jungleSums}/>
                <PortfolioCard githubLink = "https://github.com/NoahAldhous" deployedLink = "https://jungle-sum.netlify.app/" text = "Coming Soon!" image = {digitalNoah}/>
                <PortfolioCard githubLink = "https://github.com/NoahAldhous" deployedLink = "https://jungle-sum.netlify.app/" text = "Coming Soon!" image = {digitalNoah}/>
                <PortfolioCard githubLink = "https://github.com/NoahAldhous" deployedLink = "https://jungle-sum.netlify.app/" text = "Coming Soon!" image = {digitalNoah}/>
                <PortfolioCard githubLink = "https://github.com/NoahAldhous" deployedLink = "https://jungle-sum.netlify.app/" text = "Coming Soon!" image = {digitalNoah}/>
                <PortfolioCard githubLink = "https://github.com/NoahAldhous" deployedLink = "https://jungle-sum.netlify.app/" text = "Coming Soon!" image = {digitalNoah}/>
            </section>
        </div>
}


