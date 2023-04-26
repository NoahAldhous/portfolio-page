import './Aboutmepage.css';
import {useState} from 'react';
import humannoah from './images/humannoah.png';
import digitalnoah from './images/digitalnoah.png';
import Listoflikes from './Listoflikes/Listoflikes';
import { humanLikes, digitalLikes } from './data/likes';
import Togglebutton from './Togglebutton/Togglebutton';

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
            <section className= "Profile-card">
                <img className="Profile-picture" src={image} alt="Noah Aldhous, wearing a shirt"/>
                <Togglebutton handleChange = {handleChange}/>
                <p className = "noah">{noah}</p>
                <Listoflikes likes = {likes}/>
            </section>

        </section>
        <section className='Aboutme-container'>
            <section className="Skills-container">
                <p className="Skillstext"> Currently Working With</p>
                <section className="Tech-list-container">
                    <section className="Tech-list">
                            <p className="Tech">React JS</p>
                            <p className="Tech">MongoDB</p>
                            <p className="Tech">Auth0</p>
                    </section>
                    <section className="Tech-list">
                        <p className="Tech">Tailwind CSS</p>
                        <p className="Tech">Vue JS</p>
                        <p className="Tech">React Native</p>
                    </section>
                    </section>
                </section>
        </section>
    </div>
}