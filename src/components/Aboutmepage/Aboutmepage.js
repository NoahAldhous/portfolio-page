import './Aboutmepage.css';
import {useState} from 'react';
import humannoah from './images/humannoah.png';
import digitalnoah from './images/digitalnoah.png';
import Listoflikes from './Listoflikes/Listoflikes';
import { humanLikes, digitalLikes } from './data/likes';
import Togglebutton from './Togglebutton/Togglebutton';
import { DiReact, DiMongodb, DiGitBranch } from "react-icons/di";
import { RiVuejsFill } from "react-icons/ri";
import { SiNpm, SiHeroku, SiJest, SiPostgresql, SiTypescript, SiNodedotjs, SiExpress, SiTailwindcss, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";


export default function Aboutmepage(){

    const [image, setImage] = useState(humannoah);
    const [likes, setLikes] = useState(humanLikes);
    const [noah, setNoah] = useState("Human Noah")

    function handleChange(){
        if(image === humannoah){
            setImage(digitalnoah);
            setLikes(digitalLikes);
            setNoah("Digital Noah")
        }
        else{
            setImage(humannoah);
            setLikes(humanLikes);
            setNoah("Human Noah")
        };
    }

    return <div className= "Aboutmepage">
        <h2 id="AboutMePageSubheading" className= "Subheading">ABOUT ME</h2>
        <section className= "Aboutme-container">
            <section className= "Profile-card">
                <img className="Profile-picture" src={image} alt="Noah Aldhous, wearing a shirt"/>
                <Togglebutton handleChange = {handleChange}/>
                <p className = "noah">{noah}</p>
                <Listoflikes likes = {likes}/>
            </section>
            <section className="Abouttext-container">
                <p className="Abouttext">
                    Hi there! My name is Noah.     
                    <br/> 
                    <br/> 
                    Like many programmers, I grew up a HUGE nerd. 
                    I was obsessed with Fantasy and Science Fiction worlds, and although I did well in school, I didn't really enjoy academic subjects; 
                    I wanted to make things!
                    <br/>
                    <br/>
                    I studied Film Production at Arts University Bournemouth, and it was here I really developed my love for collaborative creation.
                    <br/>
                    <br/>
                    However, I struggled to get a career in film, and so settled for working in hospitality to make ends meet... 
                    <br/>
                    <br/>
                    Until the beginning of 2022, when a friend recommended I try out a coding bootcamp, something I had never considered I'd be any 
                    good at, let alone enjoy...
                    <br/>
                    <br/>
                    After an intense 16 weeks of learning with the School of Code, I came out the other side an enthusiastic JavaScript programmer, eager to learn more and ultimately 
                    pursue a career in software development!
                </p>
            </section>
        </section>
        <section className='Aboutme-container'>
            <section className="Skills-container">
                <p className="Skillstext"> I have experience working with</p>
                <section className="Tech-list-container">
                    <section className="Tech-list">
                        <div className="Icon">{ <SiHtml5 size = {40}/> }</div>
                        <p className="Tech">HTML 5</p>
                        <div className="Icon">{ <DiReact size = {40}/> }</div>
                        <p className="Tech">ReactJS</p>
                        <div className="Icon">{ <SiHeroku size = {40}/> }</div>
                        <p className="Tech">Heroku</p>
                        <div className="Icon">{ <SiJest size = {40}/> }</div>
                        <p className="Tech">Jest</p>
                    </section>
                    <section className="Tech-list">
                        <div className="Icon">{ <SiCss3 size = {40}/> }</div>
                        <p className="Tech">CSS 3</p>
                        <div className="Icon">{ <SiTailwindcss size = {40}/> }</div>
                        <p className="Tech">Tailwind CSS</p>
                        <div className="Icon">{ <RiVuejsFill size = {40}/> }</div>
                        <p className="Tech">Vue JS</p>
                        <div className="Icon">{ <DiReact size = {40}/> }</div>
                        <p className="Tech">React Native</p>
                    </section>
                    <section className="Tech-list">
                        <div className="Icon">{ <SiJavascript size = {40}/> }</div>
                        <p className="Tech">Javascript</p>
                        <div className="Icon">{ <SiNpm size = {40}/> }</div>
                        <p className="Tech">NPM</p>
                        <div className="Icon">{ <SiPostgresql size = {40}/> }</div>
                        <p className="Tech">PostgreSQL</p>
                        <div className="Icon">{ <SiNodedotjs size = {40}/> }</div>
                        <p className="Tech">NodeJS</p>
                    </section>
                    <section className="Tech-list">
                        <div className="Icon">{ <SiTypescript size = {40}/> }</div>
                        <p className="Tech">Typescript</p>
                        <div className="Icon">{ <SiExpress size = {40}/> }</div>
                        <p className="Tech">Express</p>
                        <div className="Icon">{ <DiMongodb className="Icon" size = {40}/> }</div>
                        <p className="Tech">MongoDB</p>
                        <div className="Icon">{ <DiGitBranch  size = {40}/> }</div>
                        <p className="Tech">Git</p>

                    </section>
                    </section>
                </section>
        </section>
    </div>
}