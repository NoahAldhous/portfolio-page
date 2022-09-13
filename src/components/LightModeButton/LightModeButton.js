import "./LightModeButton.css";
import { useState } from 'react';

export default function LightModeButton(){

    const [lightModeText, setLightModeText] = useState('LIGHT')
    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos){
            document.querySelector(".light-mode-button-container").style.top = "0";
        } else {
            document.querySelector(".light-mode-button-container").style.top = "-15vh";
        }
        prevScrollpos = currentScrollPos;
    }

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
            <div className = "light-mode-button-text">{lightModeText}</div>
            <i class="gg-dark-mode" onClick = {toggleLightMode}></i>
            <div className = "light-mode-button-text">MODE</div>

    </div>

}