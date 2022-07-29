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
        <h2 className= "Subheading">ABOUT ME</h2>
        <section className= "Aboutme-container">
            <section className="Abouttext-container">
                <p className="Abouttext">
                    Hi there! My name is Noah. <br/> 
                    About 6 months ago I was working in 
                    hospitality, and hadn't written a single line of code... <br/>
                    After 16 intense but incredible weeks on the SoC Bootcamp,
                    I've stopped being a server, and started building them!
                </p>
                <section className="Skills-container">
                <p className="Skillstext"> Currently Working With</p>
                <section className="Tech-list-container">
                    <section className="Tech-list">
                            <p className="Tech">React JS</p>
                            <p className="Tech">AWS Amplify</p>
                            <p className="Tech">postgreSQL</p>
                    </section>
                    <section className="Tech-list">
                        <p className="Tech">Chakra UI</p>
                        <p className="Tech">Express JS</p>
                        <p className="Tech">Typescript</p>
                    </section>
                    </section>
                </section>
            </section>
            <section className= "Profile-card">
                <img className="Profile-picture" src={image} alt="Noah Aldhous, wearing a shirt"/>
                <Togglebutton handleChange = {handleChange}/>
                <p className = "noah">{noah}</p>
                <Listoflikes likes = {likes}/>
            </section>

        </section>
    </div>
}