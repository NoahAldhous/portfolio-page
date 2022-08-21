import './Header.css'


export default function Header({ handleClick }){

    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function() {
    //     var currentScrollPos = window.pageYOffset;
    //     if (prevScrollpos > currentScrollPos){
    //         document.querySelector(".Header").style.top = "0";
    //     } else {
    //         document.querySelector(".Header").style.top = "-15vh";
    //     }
    //     prevScrollpos = currentScrollPos;
    // }

    return <div className = "Header">
        <section className = "Header-Button-Container">
            <button className = "Header-Button" onClick = {function(){handleClick(".Landingpage")}}>HOME </button>
            <button className = "Header-Button" onClick = {function(){handleClick(".Aboutmepage")}}>ABOUT</button>
        </section>
        <section className = "Header-Button-Container">
            <button className = "Header-Button" onClick = {function(){handleClick(".PortfolioPage")}}>PORTFOLIO</button>
            <button className = "Header-Button" onClick = {function(){handleClick(".ExperiencePage")}}>EXPERIENCE</button>
        </section>
        <section className = "Header-Button-Container">
            <button className = "Header-Button" onClick = {function(){handleClick(".ContactPage")}}>CONTACT</button>
            <button className = "Header-Button" onClick = {function(){handleClick(".ContactPage")}}>CV</button>
        </section>
    </div>
}