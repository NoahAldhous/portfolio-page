import './Aboutmepage.css';
import humannoah from './images/humannoah.png';
import digitalnoah from './images/digitalnoah.png';
import {useState} from 'react';
import Togglebutton from './Togglebutton/Togglebutton';
import Listoflikes from './Listoflikes/Listoflikes';
import { humanLikes, digitalLikes } from './data/likes';

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
                <p className="Abouttext">Its me</p>
                <p className="Skillstext"> currently working with</p>
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