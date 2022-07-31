import "./ExperiencePage.css";
import {useState} from "react";
import ExperienceText from "./Experience-text/Experience-text";

export default function ExperiencePage(){

    const[activeButton, setActiveButton] = useState(".SoC-Button")

    function handleClick(button){
        setActiveButton(button);
        document.querySelectorAll('.Experience-button').forEach((item) =>{
            item.classList.forEach((className)=>{
                if(className.startsWith("Active-button"))
                item.classList.remove(className);
            })
        }
        )
        document.querySelector(button).classList.toggle("Active-button")
    }

    return <div className = "ExperiencePage">
         <h2 className="Subheading">EXPERIENCE</h2>
         <section className="Experience-container">
             <section className="Experience-button-container">
                <button className={["Experience-button", "SoC-button", "Active-button"].join(' ')} onClick={function(){handleClick(".SoC-button")}} >SCHOOL OF CODE</button>
                <button className={["Experience-button", "Firstjob-button"].join(' ')} onClick={function(){handleClick(".Firstjob-button")}} >MY FIRST JOB</button>
             </section>
             <ExperienceText activeButton = {activeButton}/>
         </section>
    </div>
}