import "./ContactPage.css";

export default function ContactPage(){
    return <div className = "ContactPage">
        <h2 className = "Subheading">
            CONTACT ME
        </h2>
        <section className = "ContactText-container">
            <a className= "ContactText" href = "mailto:naldhous@hotmail.co.uk" target = "_blank" rel="noreferrer"> BY EMAIL </a>
            <a className= "ContactText" href = "https://www.linkedin.com/in/noah-aldhous-4436a3195/" target = "_blank" rel="noreferrer">ON LINKEDIN </a>
            <a className= "ContactText" href = "https://github.com/NoahAldhous" target = "_blank" rel="noreferrer">ON GITHUB </a>
            <a className= "ContactText" href = "https://twitter.com/theOldHaus" target = "_blank" rel="noreferrer">ON TWITTER </a>
        </section>
    </div>
}