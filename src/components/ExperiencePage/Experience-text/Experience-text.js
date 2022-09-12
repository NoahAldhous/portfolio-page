import "./Experience-text.css"

export default function ExperienceText({activeButton}){
    switch(activeButton){
        case ".SoC-Button":
            return  <section className="Experience-text-container">
            <h3 className="Experience-text-header">STUDENT AT THE <a className = "SoC-Link" href = "https://www.schoolofcode.co.uk/" target = "_blank" rel="noreferrer"> SCHOOL OF CODE </a></h3>
            <h3 className="Experience-date">April - August 2022</h3>
            <p className="Experience-text">
                This 16 week bootcamp taught me the fundamentals of programming 
                in the modern tech industry.   
                <br/>
                This course gave me an understanding of Javascript, HTML and CSS, 
                as well as libraries such as React, Express, Node, and Jest
                <br/>
                On top of this, I planned, built and deployed full-stack applications, in pairs and larger groups,
                with a heavy focus on collaboration, communication and agile methodology
            </p>
         </section>
        case ".Firstjob-button":
            return <section className="Experience-text-container">
            <h3 className="Experience-text-header">COULD BE YOU!</h3>
            <h3 className="Experience-date">August 2022 - ???</h3>
            <p className="Experience-text">
                I'm fresh out of the School of Code and ready to start my career in the weird
                and wonderful world of tech!
                <br/>
                If you have a position open, and are interested in reaching out to arrange an interview, please
                don't hesitate to <a className = "Email-link" href="mailto:naldhous@hotmail.co.uk" target='_blank' rel='noreferrer'>contact me!</a>
            </p>
         </section>
        default: 
            return <section className="Experience-text-container">
            <h3 className="Experience-text-header">STUDENT AT THE <a className = "SoC-Link" href = "https://www.schoolofcode.co.uk/"> SCHOOL OF CODE </a></h3>
            <h3 className="Experience-date">April - August 2022</h3>
            <p className="Experience-text">
                This 16 week bootcamp taught me the fundamentals of programming 
                in the modern tech industry.   
                <br/>
                This course gave me an understanding of Javascript, HTML and CSS, 
                as well as libraries such as React, Express, Node, and Jest
                <br/>
                On top of this, I planned, built and deployed full-stack applications, in pairs and larger groups,
                with a heavy focus on collaboration, communication and agile methodology
            </p>
         </section>
        
    }
}