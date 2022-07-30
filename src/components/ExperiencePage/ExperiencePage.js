import "./ExperiencePage.css";
import {useState} from "react";

export default function ExperiencePage(){

    const[header, setHeader] = useState("STUDENT AT THE SCHOOL OF CODE")
    const[date, setDate] = useState("April - August 2022")
    const[text, setText] = useState(
        `This 16 week bootcamp taught me the fundamentals of programming 
        in the modern tech industry.   
        {<br/>}
        This course gave me an understanding of Javascript, HTML and CSS, 
        as well as libraries such as React, Express, Node, and Jest
        {<br/>}
        On top of this, I planned, built and deployed full-stack applications, in pairs and larger groups,
        with a heavy focus on collaboration, communication and agile methodology`
    )

    function handleClick(button){
        document.querySelectorAll('.Experience-button').forEach((item) =>{
            item.classList.forEach((className)=>{
                if(className.startsWith("Active-button"))
                item.classList.remove(className);
            })
        }
        )
        document.querySelector(button).classList.toggle("Active-button")
        switch(button){
            case ".Firstjob-button":
                setHeader("COULD BE YOU!");
                setDate("August 2022 - ???");
                setText(
                    `I'm fresh out of the School of Code and ready to start my career in the
                    world of tech! If you are interested in helping me take my first step into 
                    this weird and wonderful world, get in contact!`
                )
                break;
            case ".SoC-button":
                setHeader(`STUDENT AT THE ${<a className = "SoC-Link" href = "https://www.schoolofcode.co.uk/"> SCHOOL OF CODE </a>}`);
                setDate("April - August 2022");
                setText(
                    `This 16 week bootcamp taught me the fundamentals of programming 
                    in the modern tech industry.   
                    ${<br/>}
                    This course gave me an understanding of Javascript, HTML and CSS, 
                    as well as libraries such as React, Express, Node, and Jest
                    ${<br/>}
                    On top of this, I planned, built and deployed full-stack applications, in pairs and larger groups,
                    with a heavy focus on collaboration, communication and agile methodology`
                )
                break;
            default:
                break;
        }
    }

    return <div className = "ExperiencePage">
         <h2 className="Subheading">EXPERIENCE</h2>
         <section className="Experience-container">
             <section className="Experience-button-container">
                <button className={["Experience-button", "SoC-button", "Active-button"].join(' ')} onClick={function(){handleClick(".SoC-button")}} >SCHOOL OF CODE</button>
                <button className={["Experience-button", "Firstjob-button"].join(' ')} onClick={function(){handleClick(".Firstjob-button")}} >MY FIRST JOB</button>
                {/* <button className={["Experience-button", "Another-button"].join(' ')} onClick={function(){handleClick(".Another-button")}} >ANOTHER THING</button>
                <button className={["Experience-button", "More-button"].join(' ')} onClick={function(){handleClick(".More-button")}} >MORE STUFF</button> */}
             </section>
             <section className="Experience-text-container">
                <h3 className="Experience-text-header">{header}</h3>
                <h3 className="Experience-date">{date}</h3>
                <p className="Experience-text">
                    {text}
                </p>
             </section>
         </section>
    </div>
}