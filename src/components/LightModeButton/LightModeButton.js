import "./LightModeButton.css";
import { useState } from 'react';

export default function LightModeButton(){

    const [lightModeText, setLightModeText] = useState('LIGHT')



    function toggleLightMode(){
        var element = document.body;
        element.classList.toggle("light-mode");
        if(lightModeText === "LIGHT"){
            setLightModeText("DARK")
        }
        else if(lightModeText === "DARK"){
            setLightModeText("LIGHT")
        }
    }

    return <div className = "light-mode-button-container">
            <div className = "light-mode-button-text" onClick = {toggleLightMode}>{lightModeText}</div>
            <i class="gg-dark-mode" onClick = {toggleLightMode}></i>
            <div className = "light-mode-button-text" onClick = {toggleLightMode}>MODE</div>

    </div>

}