import "./PortfolioPage.css";

export default function PortfolioPage(){
   return <div className="PortfolioPage">
            <h2 className="Subheading">MY PORTFOLIO</h2>
            <section className="Portfolio-container">
                <section className="Portfolio-card-container">
                    <div className="Portfolio-card">
                        <div className="card-overlay">Sample Text</div>
                        <img className= "harold" src= "https://beebom.com/wp-content/uploads/2020/01/Hide-the-Pain-Harold-is-Imgur%E2%80%99s-Meme-of-the-Decade.jpg?w=3000&quality=75" alt= "harold"/>
                    </div>
                    <div className="Portfolio-card">
                        <div className="card-overlay"></div>
                    </div>
                    <div className="Portfolio-card">
                        <div className="card-overlay"></div>
                    </div>
                </section>
                <section className="Portfolio-card-container">
                    <div className="Portfolio-card">
                        <div className="card-overlay"></div>
                    </div>
                    <div className="Portfolio-card">
                        <div className="card-overlay"></div>
                    </div>
                    <div className="Portfolio-card">
                        <div className="card-overlay"></div>
                    </div>
                </section>
            </section>
        </div>
}


