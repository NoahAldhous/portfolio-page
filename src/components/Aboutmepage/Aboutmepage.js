import './Aboutmepage.css';
import humannoah from './images/humannoah.png';
import digitalnoah from './images/digitalnoah.png';
import {useState} from 'react';

export default function Aboutmepage(){

    const [image, setImage] = useState(humannoah)

    function handleChange(){
        if(image === humannoah){
        setImage(digitalnoah);
        }
        else{setImage(humannoah)};
    }

    return <div className= "Aboutmepage">
        <h2 className= "Subheading">ABOUT ME</h2>
        <div className= "Aboutme-container">
            <div className="Abouttext-container">
                <p className="Abouttext">Its me</p>
                <p className="Skillstext"> currently working with</p>
            </div>
            <div className= "Profile-card">
                <img className="Profile-picture" src={image} alt="Noah Aldhous, wearing a shirt"/>
                <div className= "Picture-switcher">
                    <label className="switch">
                    <input type="checkbox" onChange={handleChange}/>
                    <span className="slider round"></span>
                    </label>
                </div>
            </div>

        </div>
    </div>
}